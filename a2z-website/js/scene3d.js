/* ── 3D showroom (Three.js r128) ─────────────────────────── */
window.addEventListener("load", function init3D() {
  const stage = document.getElementById("stage");
  if (!stage || !window.THREE) return;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    if (!renderer.getContext()) return;
  } catch (e) { return; }

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const canvas = renderer.domElement;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "3D view of a fridge, washing machine, microwave, geyser and AC");
  stage.prepend(canvas);
  stage.classList.add("is-3d");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const lookAt = new THREE.Vector3(0, 1.5, 0);

  /* Soft studio reflections from a generated gradient, so metal looks like metal */
  (function env() {
    const c = document.createElement("canvas"); c.width = 512; c.height = 256;
    const g = c.getContext("2d");
    const grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, "#dcecff"); grd.addColorStop(0.45, "#6f8fb3"); grd.addColorStop(0.55, "#16304f"); grd.addColorStop(1, "#000d1a");
    g.fillStyle = grd; g.fillRect(0, 0, 512, 256);
    g.fillStyle = "rgba(255,255,255,.95)"; g.fillRect(60, 40, 120, 50); g.fillRect(330, 30, 140, 40);
    g.fillStyle = "rgba(90,176,245,.9)"; g.fillRect(220, 70, 60, 30);
    const tex = new THREE.CanvasTexture(c);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.encoding = THREE.sRGBEncoding;
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromEquirectangular(tex).texture;
    tex.dispose(); pm.dispose();
  })();

  scene.add(new THREE.HemisphereLight(0xd6eaff, 0x001f3c, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(4, 8, 6); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 25 });
  key.shadow.bias = -0.0006; key.shadow.radius = 5;
  scene.add(key);
  const rim = new THREE.PointLight(0x1e88e5, 2.2, 18); rim.position.set(-3.5, 3.5, -4); scene.add(rim);
  const rim2 = new THREE.PointLight(0x5ab0f5, 1.2, 18); rim2.position.set(3.5, 2, -3); scene.add(rim2);

  const std = (o) => {
    const m = new THREE.MeshStandardMaterial(o);
    m.color.convertSRGBToLinear(); // hex values are sRGB brand colours
    if (o.emissive) m.emissive.convertSRGBToLinear();
    return m;
  };
  const M = {
    steel: std({ color: 0xb4bfcb, metalness: 0.85, roughness: 0.28 }),
    darkSteel: std({ color: 0x323d4b, metalness: 0.7, roughness: 0.32 }),
    white: std({ color: 0xf2f5f8, metalness: 0.05, roughness: 0.32 }),
    panel: std({ color: 0x111c29, metalness: 0.3, roughness: 0.35 }),
    glass: std({ color: 0x0b2238, metalness: 0.6, roughness: 0.05, transparent: true, opacity: 0.5 }),
    chrome: std({ color: 0xe6ecf2, metalness: 1, roughness: 0.15 }),
    blue: std({ color: 0x1e88e5, emissive: 0x1e88e5, emissiveIntensity: 1.2 }),
    red: std({ color: 0xd84343, roughness: 0.4 }),
    pipeBlue: std({ color: 0x2f7fd8, roughness: 0.4 }),
    floor: std({ color: 0x0b2f5b, metalness: 0.15, roughness: 0.7, envMapIntensity: 0.3 }),
    pedestal: std({ color: 0x163a66, metalness: 0.3, roughness: 0.5 })
  };

  const mesh = (geo, mat, x = 0, y = 0, z = 0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; return m;
  };
  function rrShape(w, h, r) {
    const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }
  function rbox(w, h, d, r, mat) {
    const b = Math.min(r, d / 3) * 0.6;
    const geo = new THREE.ExtrudeGeometry(rrShape(w - 2 * b, h - 2 * b, Math.max(r - b, 0.01)),
      { depth: d - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 4, curveSegments: 10 });
    geo.center();
    return mesh(geo, mat);
  }
  const box = (w, h, d, mat, x, y, z) => mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z);

  const turntable = new THREE.Group();
  scene.add(turntable);

  /* Floor disc with the blue ring from the logo swoosh */
  const floor = mesh(new THREE.CylinderGeometry(3.3, 3.3, 0.1, 96), M.floor, 0, -0.05, 0);
  floor.castShadow = false; turntable.add(floor);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.035, 8, 180), M.blue);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.002; turntable.add(ring);

  const pickables = [];
  const appliance = (id, x, z, ry) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
    g.userData = { id, lift: 0, baseY: 0 }; turntable.add(g); pickables.push(g); return g;
  };

  /* Fridge */
  const fridge = appliance("fridge", -1.85, -0.35, 0.28);
  const fb = rbox(1.15, 2.5, 1.0, 0.1, M.steel); fb.position.y = 1.25; fridge.add(fb);
  fridge.add(box(1.1, 0.025, 0.02, M.panel, 0, 1.68, 0.505));
  fridge.add(box(0.05, 0.55, 0.06, M.chrome, 0.44, 2.05, 0.55));
  fridge.add(box(0.05, 0.75, 0.06, M.chrome, 0.44, 1.2, 0.55));
  fridge.add(box(0.2, 0.1, 0.012, M.blue, -0.3, 2.2, 0.506));

  /* Washing machine with a spinning drum */
  const washer = appliance("washer", 0.05, 0.55, -0.05);
  const wb = rbox(1.25, 1.3, 1.1, 0.1, M.white); wb.position.y = 0.65; washer.add(wb);
  washer.add(box(1.13, 0.22, 0.02, M.panel, 0, 1.13, 0.555));
  washer.add(box(0.26, 0.08, 0.012, M.blue, 0.24, 1.13, 0.567));
  const knob = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.05, 32), M.chrome, -0.3, 1.13, 0.58);
  knob.rotation.x = Math.PI / 2; washer.add(knob);
  const doorRing = mesh(new THREE.TorusGeometry(0.36, 0.055, 20, 64), M.chrome, 0, 0.55, 0.56); washer.add(doorRing);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.34, 48), M.glass); glass.position.set(0, 0.55, 0.585); washer.add(glass);
  const drum = new THREE.Group(); drum.position.set(0, 0.55, 0.5); washer.add(drum);
  drum.add(new THREE.Mesh(new THREE.CircleGeometry(0.33, 48), M.darkSteel));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const p = box(0.05, 0.16, 0.08, M.steel, Math.cos(a) * 0.25, Math.sin(a) * 0.25, 0.03);
    p.rotation.z = a + Math.PI / 2; drum.add(p);
  }
  [[0xf7931e, 0.14, 0.4], [0x5ab0f5, 0.16, 2.4], [0xffffff, 0.12, 4.3]].forEach(([c, r, a]) => {
    const cl = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), std({ color: c, roughness: 0.9 }));
    cl.position.set(Math.cos(a) * r, Math.sin(a) * r, 0.05); cl.scale.set(1.3, 0.8, 0.6); drum.add(cl);
  });

  /* Microwave on top of the washer */
  const micro = appliance("microwave", 0.05, 0.55, -0.05);
  const mb = rbox(0.95, 0.52, 0.62, 0.06, M.darkSteel); mb.position.y = 1.56; micro.add(mb);
  micro.add(box(0.6, 0.36, 0.012, M.glass, -0.1, 1.56, 0.312));
  micro.add(box(0.15, 0.06, 0.012, M.blue, 0.32, 1.67, 0.312));
  for (let i = 0; i < 3; i++) micro.add(box(0.12, 0.035, 0.012, M.chrome, 0.32, 1.57 - i * 0.07, 0.313));

  /* Geyser on a pedestal */
  const geyser = appliance("geyser", 1.9, -0.15, -0.32);
  const ped = rbox(0.75, 0.55, 0.75, 0.05, M.pedestal); ped.position.y = 0.275; geyser.add(ped);
  const gy = 1.35;
  geyser.add(mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.95, 48), M.white, 0, gy, 0));
  [gy + 0.475, gy - 0.475].forEach((y, i) => {
    const cap = mesh(new THREE.SphereGeometry(0.4, 48, 24, 0, Math.PI * 2, i ? Math.PI / 2 : 0, Math.PI / 2), M.white, 0, y, 0);
    cap.scale.y = 0.32; geyser.add(cap);
  });
  const gauge = mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.03, 32), M.chrome, 0, gy + 0.22, 0.4);
  gauge.rotation.x = Math.PI / 2; geyser.add(gauge);
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.085, 32), std({ color: 0xffffff, roughness: 0.5 }));
  face.position.set(0, gy + 0.22, 0.417); geyser.add(face);
  const needle = box(0.01, 0.07, 0.005, M.red, 0.015, gy + 0.245, 0.42); needle.rotation.z = -0.6; geyser.add(needle);
  geyser.add(box(0.07, 0.07, 0.01, M.red, 0, gy - 0.2, 0.402));
  geyser.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16), M.red, -0.13, gy - 0.72, 0));
  geyser.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.32, 16), M.pipeBlue, 0.13, gy - 0.72, 0));

  /* Split AC floating above, with airflow */
  const ac = appliance("ac", 0, -0.75, 0);
  const acBody = new THREE.Group(); ac.add(acBody);
  const ab = rbox(2.3, 0.6, 0.55, 0.14, M.white); acBody.add(ab);
  acBody.add(box(2.0, 0.06, 0.02, M.panel, 0, -0.17, 0.275));
  acBody.add(box(0.08, 0.025, 0.01, M.blue, 0.9, 0.0, 0.277));
  acBody.position.y = 3.3;
  const arcs = [];
  for (let i = 0; i < 4; i++) {
    const m = new THREE.MeshBasicMaterial({ color: 0x9fd2ff, transparent: true, opacity: 0.5, depthWrite: false });
    const a = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.012, 6, 60, Math.PI * 0.55), m);
    a.rotation.z = Math.PI * 1.225; a.position.set(0, 2.9, 0.15);
    ac.add(a); arcs.push(a);
  }

  /* Interaction */
  const tip = document.getElementById("stageTip");
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  let hovered = null, dragging = false, lastX = 0, moved = 0, vel = 0, userRot = 0;
  const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, true)[0];
    if (!hit) return null;
    let o = hit.object; while (o && !o.userData.id) o = o.parent;
    return o;
  }
  function setHover(g, e) {
    hovered = g;
    canvas.style.cursor = g ? "pointer" : "grab";
    if (!g || !e) { tip.hidden = true; return; }
    const s = SERVICES.find((x) => x.id === g.userData.id);
    const r = stage.getBoundingClientRect();
    tip.innerHTML = `${esc(L(s).short)}<small>${t("tip_book")}</small>`;
    tip.style.left = e.clientX - r.left + "px";
    tip.style.top = e.clientY - r.top + "px";
    tip.hidden = false;
  }
  canvas.addEventListener("pointerdown", (e) => {
    dragging = true; lastX = e.clientX; moved = 0; vel = 0;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    parallax.tx = ((e.clientX - r.left) / r.width - 0.5);
    parallax.ty = ((e.clientY - r.top) / r.height - 0.5);
    if (dragging) {
      const dx = e.clientX - lastX; lastX = e.clientX;
      moved += Math.abs(dx); userRot += dx * 0.008; vel = dx * 0.008;
      if (moved > 6) setHover(null);
    } else if (e.pointerType === "mouse") {
      setHover(pick(e), e);
    }
  });
  canvas.addEventListener("pointerup", (e) => {
    dragging = false;
    if (moved < 6) { const g = pick(e); if (g) pickAppliance(g.userData.id); }
  });
  canvas.addEventListener("pointercancel", () => { dragging = false; });
  canvas.addEventListener("pointerleave", () => { if (!dragging) setHover(null); parallax.tx = parallax.ty = 0; });

  /* Sizing */
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.userData.dist = w / h < 1 ? 13.5 : w / h < 1.3 ? 11.6 : 10.4;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(stage);
  resize();

  /* Loop runs only while the stage is on screen */
  let visible = true, raf = 0;
  const clock = new THREE.Clock();
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !raf) loop(); }).observe(stage);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && visible && !raf) loop(); });

  function loop() {
    if (!visible || document.hidden) { raf = 0; return; }
    raf = requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.05), time = clock.elapsedTime;
    if (!dragging) { vel *= 0.93; userRot += vel; }
    const auto = reduced ? 0 : Math.sin(time * 0.22) * 0.42;
    turntable.rotation.y = auto + userRot;

    if (!reduced) {
      drum.rotation.z -= dt * 5;
      acBody.position.y = 3.3 + Math.sin(time * 1.3) * 0.04;
      arcs.forEach((a, i) => {
        const p = (time * 0.45 + i / arcs.length) % 1;
        a.position.y = 2.95 - p * 0.9;
        a.scale.setScalar(0.8 + p * 0.6);
        a.material.opacity = 0.6 * (1 - p) * Math.min(1, p * 5);
      });
    }
    pickables.forEach((g) => {
      const target = g === hovered ? 0.14 : 0;
      g.userData.lift += (target - g.userData.lift) * 0.15;
      g.position.y = g.userData.lift;
    });
    parallax.x += (parallax.tx - parallax.x) * 0.05;
    parallax.y += (parallax.ty - parallax.y) * 0.05;
    const d = camera.userData.dist || 9.6;
    camera.position.set(parallax.x * 1.2, 2.7 - parallax.y * 0.6, d);
    camera.lookAt(lookAt);
    renderer.render(scene, camera);
  }
  loop();
});

/* Gentle 3D tilt on service and tip cards (mouse only) */
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let lastCard = null;
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest ? e.target.closest(".card, .tip") : null;
    if (lastCard && lastCard !== c) lastCard.style.transform = "";
    lastCard = c;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(700px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-2px)`;
  });
}
