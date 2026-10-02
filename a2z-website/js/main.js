/* ────────────────────────────────────────────────
   EDIT HERE: business details and appliance content
   ──────────────────────────────────────────────── */
const BIZ = {
  phone: "8860010603",
  whatsapp: "918860010603",
  address: "A2Z Solution Point, Gadra Govindpur Main Road, Near Chunna Godown",
  brands: ["LG","Samsung","Whirlpool","IFB","Voltas","Haier","Bosch","Hitachi","Godrej","Bajaj"]
};

const SERVICES = [
  { id:"ac",
    en:{ name:"AC Repair & Service", short:"AC", summary:"Servicing, gas filling, installation and PCB repair for every type of AC.",
      types:["Split AC","Window AC","Inverter AC","Cassette / Tower AC"],
      problems:["Not cooling or cooling slowly","Water dripping from indoor unit","Gas leakage","Unusual noise or smell","Not turning on / PCB fault"],
      work:["Jet / foam servicing","Gas filling & leak repair","Installation & uninstallation","PCB & electrical repair","Compressor & capacitor replacement"] },
    hi:{ name:"एसी रिपेयर और सर्विस", short:"एसी", summary:"हर तरह के एसी की सर्विसिंग, गैस फिलिंग, इंस्टॉलेशन और PCB रिपेयर।",
      types:["स्प्लिट एसी","विंडो एसी","इन्वर्टर एसी","कैसेट / टावर एसी"],
      problems:["ठंडा नहीं कर रहा या धीरे ठंडा करता है","इनडोर यूनिट से पानी टपकना","गैस लीकेज","अजीब आवाज़ या बदबू","चालू नहीं हो रहा / PCB खराब"],
      work:["जेट / फोम सर्विसिंग","गैस फिलिंग और लीक रिपेयर","इंस्टॉलेशन और अनइंस्टॉलेशन","PCB और इलेक्ट्रिकल रिपेयर","कंप्रेसर और कैपेसिटर बदलना"] } },
  { id:"washer",
    en:{ name:"Washing Machine Repair", short:"Washing Machine", summary:"Top load, front load or semi-automatic — checked, repaired and tested at your home.",
      types:["Fully automatic top load","Fully automatic front load","Semi-automatic"],
      problems:["Machine not starting","Water not filling or draining","Drum not spinning","Noise or heavy vibration","Error code on display","Water leakage"],
      work:["Complete checkup","Motor & PCB repair","Drum & filter cleaning","Installation & uninstallation","Regular maintenance"] },
    hi:{ name:"वॉशिंग मशीन रिपेयर", short:"वॉशिंग मशीन", summary:"टॉप लोड, फ्रंट लोड या सेमी-ऑटोमैटिक — घर पर जांच, रिपेयर और टेस्टिंग।",
      types:["फुली ऑटोमैटिक टॉप लोड","फुली ऑटोमैटिक फ्रंट लोड","सेमी-ऑटोमैटिक"],
      problems:["मशीन चालू नहीं हो रही","पानी भर नहीं रहा या निकल नहीं रहा","ड्रम नहीं घूम रहा","आवाज़ या ज़्यादा हिलना","डिस्प्ले पर एरर कोड","पानी लीक होना"],
      work:["पूरी जांच","मोटर और PCB रिपेयर","ड्रम और फिल्टर की सफाई","इंस्टॉलेशन और अनइंस्टॉलेशन","नियमित मेंटेनेंस"] } },
  { id:"fridge",
    en:{ name:"Fridge Repair", short:"Fridge", summary:"Single door to side-by-side — cooling problems, gas charging and compressor work.",
      types:["Single door","Double door","Side-by-side","Inverter fridge"],
      problems:["Not cooling","Ice building up in freezer","Gas leakage","Water collecting inside","Loud compressor noise"],
      work:["Gas charging","Compressor & relay replacement","Thermostat repair","PCB repair","Door gasket replacement"] },
    hi:{ name:"फ्रिज रिपेयर", short:"फ्रिज", summary:"सिंगल डोर से साइड-बाय-साइड तक — कूलिंग की समस्या, गैस चार्जिंग और कंप्रेसर का काम।",
      types:["सिंगल डोर","डबल डोर","साइड-बाय-साइड","इन्वर्टर फ्रिज"],
      problems:["ठंडा नहीं कर रहा","फ्रीज़र में बर्फ जमना","गैस लीकेज","अंदर पानी जमा होना","कंप्रेसर की तेज़ आवाज़"],
      work:["गैस चार्जिंग","कंप्रेसर और रिले बदलना","थर्मोस्टेट रिपेयर","PCB रिपेयर","डोर गैस्केट बदलना"] } },
  { id:"microwave",
    en:{ name:"Microwave Repair", short:"Microwave", summary:"Solo, grill or convection ovens that won't heat, spin or respond.",
      types:["Solo","Grill","Convection"],
      problems:["Not heating","Turntable not rotating","Buttons or panel not working","Sparking inside","Door not closing properly"],
      work:["Magnetron replacement","Control panel repair","Door switch replacement","Fuse & transformer check"] },
    hi:{ name:"माइक्रोवेव रिपेयर", short:"माइक्रोवेव", summary:"सोलो, ग्रिल या कन्वेक्शन ओवन जो गरम नहीं करते, घूमते नहीं या बटन काम नहीं करते।",
      types:["सोलो","ग्रिल","कन्वेक्शन"],
      problems:["गरम नहीं कर रहा","प्लेट नहीं घूम रही","बटन या पैनल काम नहीं कर रहा","अंदर स्पार्किंग","दरवाज़ा ठीक से बंद नहीं होता"],
      work:["मैग्नेट्रॉन बदलना","कंट्रोल पैनल रिपेयर","डोर स्विच बदलना","फ्यूज़ और ट्रांसफॉर्मर जांच"] } },
  { id:"geyser",
    en:{ name:"Geyser Repair", short:"Geyser", summary:"Element, thermostat and leakage repairs, plus new installations.",
      types:["Storage geyser","Instant geyser"],
      problems:["No heating","Water too hot or too cold","Leakage from tank or pipe","MCB tripping","Indicator light not working"],
      work:["Heating element replacement","Thermostat replacement","Installation & uninstallation","Tank descaling","Valve & pipe repair"] },
    hi:{ name:"गीज़र रिपेयर", short:"गीज़र", summary:"एलिमेंट, थर्मोस्टेट और लीकेज रिपेयर, साथ में नया इंस्टॉलेशन।",
      types:["स्टोरेज गीज़र","इंस्टेंट गीज़र"],
      problems:["पानी गरम नहीं हो रहा","पानी बहुत ज़्यादा या कम गरम","टैंक या पाइप से लीकेज","MCB ट्रिप होना","इंडिकेटर लाइट काम नहीं कर रही"],
      work:["हीटिंग एलिमेंट बदलना","थर्मोस्टेट बदलना","इंस्टॉलेशन और अनइंस्टॉलेशन","टैंक की डीस्केलिंग","वाल्व और पाइप रिपेयर"] } },
  { id:"chimney",
    en:{ name:"Chimney Repair & Cleaning", short:"Chimney", summary:"Weak suction, noise or oily build-up — repair and deep cleaning.",
      types:["Wall-mounted","Island","Filterless / auto-clean"],
      problems:["Weak suction","Motor not running","Loud noise","Oil dripping","Lights or buttons not working"],
      work:["Filter cleaning","Deep cleaning","Motor repair / replacement","Installation"] },
    hi:{ name:"चिमनी रिपेयर और सफाई", short:"चिमनी", summary:"कम सक्शन, आवाज़ या तेल जमना — रिपेयर और डीप क्लीनिंग।",
      types:["वॉल-माउंटेड","आइलैंड","फिल्टरलेस / ऑटो-क्लीन"],
      problems:["सक्शन कम","मोटर नहीं चल रही","तेज़ आवाज़","तेल टपकना","लाइट या बटन काम नहीं कर रहे"],
      work:["फिल्टर की सफाई","डीप क्लीनिंग","मोटर रिपेयर / बदलना","इंस्टॉलेशन"] } },
  { id:"freezer",
    en:{ name:"Deep Freezer Repair", short:"Deep Freezer", summary:"Chest freezers and visi coolers for homes and shops.",
      types:["Chest freezer","Visi cooler","Commercial freezer"],
      problems:["Not freezing","Gas leakage","Compressor not starting","Heavy ice build-up"],
      work:["Gas charging","Compressor work","Thermostat repair","General service"] },
    hi:{ name:"डीप फ्रीज़र रिपेयर", short:"डीप फ्रीज़र", summary:"घर और दुकान के चेस्ट फ्रीज़र और विज़ी कूलर।",
      types:["चेस्ट फ्रीज़र","विज़ी कूलर","कमर्शियल फ्रीज़र"],
      problems:["जमा नहीं रहा","गैस लीकेज","कंप्रेसर चालू नहीं हो रहा","ज़्यादा बर्फ जमना"],
      work:["गैस चार्जिंग","कंप्रेसर का काम","थर्मोस्टेट रिपेयर","जनरल सर्विस"] } },
  { id:"ro",
    en:{ name:"RO Water Purifier", short:"RO Purifier", summary:"Filter changes, servicing and repair for RO and UV purifiers.",
      types:["RO","RO + UV","UV / UF"],
      problems:["Low water flow","Bad taste or smell","Water leaking","Not switching on"],
      work:["Filter & membrane change","Pump & SMPS repair","Installation","Regular service"] },
    hi:{ name:"आरओ वॉटर प्यूरीफायर", short:"आरओ", summary:"RO और UV प्यूरीफायर के फिल्टर बदलना, सर्विस और रिपेयर।",
      types:["RO","RO + UV","UV / UF"],
      problems:["पानी कम आना","पानी का स्वाद या गंध खराब","पानी लीक होना","चालू नहीं हो रहा"],
      work:["फिल्टर और मेम्ब्रेन बदलना","पंप और SMPS रिपेयर","इंस्टॉलेशन","नियमित सर्विस"] } },
  { id:"buysell",
    en:{ name:"Buy & Sell Appliances", short:"Buy & Sell", summary:"Sell your old appliance or buy a checked, working one at a fair price.",
      types:["AC","Washing machine","Fridge","Geyser","Others"],
      problems:["Upgrading and want to sell the old one","Need a budget appliance","Shifting house"],
      work:["Doorstep pickup quote","Tested second-hand appliances","New appliances on order"] },
    hi:{ name:"उपकरण खरीदें और बेचें", short:"खरीदें-बेचें", summary:"अपना पुराना उपकरण बेचें या जांचा हुआ, चालू उपकरण सही दाम पर खरीदें।",
      types:["एसी","वॉशिंग मशीन","फ्रिज","गीज़र","अन्य"],
      problems:["नया ले रहे हैं, पुराना बेचना है","कम बजट में उपकरण चाहिए","घर बदल रहे हैं"],
      work:["घर से पिकअप का दाम","जांचे हुए पुराने उपकरण","ऑर्डर पर नए उपकरण"] } }
];

const TIPS = [
  { icon:"ac", en:["Clean the AC filter every 2 weeks in summer","A dusty filter cuts cooling and raises the bill. Get a full service before summer starts."],
    hi:["गर्मियों में हर 2 हफ्ते एसी फिल्टर साफ करें","धूल भरा फिल्टर कूलिंग घटाता है और बिल बढ़ाता है। गर्मी शुरू होने से पहले पूरी सर्विस करवाएं।"] },
  { icon:"washer", en:["Run an empty tub-clean cycle every month","It removes detergent build-up and smell. Don't overload the drum."],
    hi:["हर महीने खाली टब-क्लीन साइकिल चलाएं","इससे डिटर्जेंट का जमाव और बदबू हटती है। ड्रम में ज़्यादा कपड़े न भरें।"] },
  { icon:"fridge", en:["Leave space behind the fridge","A few inches of gap lets heat escape. Let hot food cool before putting it in."],
    hi:["फ्रिज के पीछे जगह छोड़ें","कुछ इंच की जगह से गर्मी निकलती है। गरम खाना ठंडा होने के बाद ही रखें।"] },
  { icon:"geyser", en:["Switch off the geyser once water is hot","It saves power and protects the element. Get it descaled yearly if your water is hard."],
    hi:["पानी गरम होने के बाद गीज़र बंद करें","बिजली बचती है और एलिमेंट सुरक्षित रहता है। खारा पानी हो तो साल में एक बार डीस्केलिंग करवाएं।"] },
  { icon:"microwave", en:["Never put metal in the microwave","Foil and steel cause sparks. Wipe splatters before they burn onto the walls."],
    hi:["माइक्रोवेव में कभी धातु न रखें","फॉइल और स्टील से स्पार्क होता है। छींटे जलने से पहले साफ कर दें।"] },
  { icon:"chimney", en:["Wash chimney filters every 2–4 weeks","Oily filters choke suction and strain the motor. Soak them in hot soapy water."],
    hi:["हर 2–4 हफ्ते चिमनी फिल्टर धोएं","तेल भरे फिल्टर सक्शन कम करते हैं और मोटर पर ज़ोर डालते हैं। गरम साबुन वाले पानी में भिगोकर धोएं।"] }
];

const FAQ = [
  { en:["Do you repair all brands?","Yes. We service LG, Samsung, Whirlpool, IFB, Voltas, Haier, Bosch, Hitachi and most other brands."],
    hi:["क्या आप सभी ब्रांड रिपेयर करते हैं?","हाँ। हम LG, Samsung, Whirlpool, IFB, Voltas, Haier, Bosch, Hitachi और ज़्यादातर दूसरे ब्रांड की सर्विस करते हैं।"] },
  { en:["Will the technician come to my home?","Yes, repairs are done at your doorstep. In most cases we can visit the same day."],
    hi:["क्या टेक्नीशियन घर आएंगे?","हाँ, रिपेयर आपके घर पर होती है। ज़्यादातर मामलों में उसी दिन विज़िट हो जाती है।"] },
  { en:["Will I know the cost before the repair?","Yes. The technician checks the appliance and tells you the cost before starting any work."],
    hi:["क्या रिपेयर से पहले खर्च पता चलेगा?","हाँ। टेक्नीशियन जांच करके काम शुरू करने से पहले खर्च बता देते हैं।"] },
  { en:["Do you use original spare parts?","Yes, we use genuine spare parts, and the service comes with a warranty."],
    hi:["क्या असली स्पेयर पार्ट्स लगाते हैं?","हाँ, हम असली स्पेयर पार्ट्स लगाते हैं और सर्विस पर वारंटी मिलती है।"] },
  { en:["Do you buy old appliances?","Yes. Use the “Sell your old appliance” form above, or send photos on WhatsApp to get a price."],
    hi:["क्या आप पुराने उपकरण खरीदते हैं?","हाँ। ऊपर दिए “पुराना उपकरण बेचें” फॉर्म से या WhatsApp पर फोटो भेजकर दाम जानें।"] },
  { en:["Do you come to my area?","We're on Gadra Govindpur Main Road. Call or WhatsApp 8860010603 with your location and we'll confirm."],
    hi:["क्या आप मेरे इलाके में आते हैं?","हम Gadra Govindpur Main Road पर हैं। अपनी लोकेशन के साथ 8860010603 पर कॉल या WhatsApp करें, हम बता देंगे।"] }
];

/* Hindi text for the fixed parts of the page (English is read from the page itself) */
const HI = {
  nav_services:"सेवाएं", nav_process:"कैसे काम करते हैं", nav_catalogue:"कैटलॉग", nav_faq:"सवाल-जवाब",
  book_btn:"रिपेयर बुक करें", book_short:"बुक करें", call:"कॉल",
  h1:"उपकरण खराब है?<br>हम घर आकर ठीक करेंगे।",
  lead:"एसी, वॉशिंग मशीन, फ्रिज, माइक्रोवेव, गीज़र, चिमनी और भी बहुत कुछ। सभी ब्रांड, असली स्पेयर पार्ट्स, सर्विस पर वारंटी।",
  call_num:"कॉल करें 8860010603", wa_us:"WhatsApp करें",
  pick_h:"क्या ठीक कराना है?", pick_p:"बुकिंग के लिए अपना उपकरण चुनें",
  st1:"खुश ग्राहक", st2:"तरह के उपकरण", st3b:"सभी", st3:"बड़े ब्रांड की सर्विस", st4b:"उसी दिन", st4:"ज़्यादातर मामलों में विज़िट",
  svc_h:"हमारी सेवाएं", svc_p:"घर के हर उपकरण की रिपेयर, सर्विस और इंस्टॉलेशन। पूरी जानकारी के लिए किसी भी सेवा पर टैप करें।",
  proc_h:"रिपेयर कैसे होती है",
  s1b:"ऑनलाइन बुक करें या कॉल करें", s1:"उपकरण, समस्या और अपना सुविधाजनक समय बताएं।",
  s2b:"हम विज़िट पक्की करते हैं", s2:"समय तय करने के लिए आपको कॉल आएगा।",
  s3b:"घर पर जांच", s3:"टेक्नीशियन खराबी ढूंढकर काम से पहले खर्च बताते हैं।",
  s4b:"असली पार्ट्स से रिपेयर", s4:"खराब पार्ट्स रिपेयर या असली स्पेयर से बदले जाते हैं।",
  s5b:"आपके सामने टेस्टिंग", s5:"जाने से पहले मशीन चलाकर जांची जाती है।",
  why_h:"ग्राहक A2Z को क्यों चुनते हैं",
  r1b:"अनुभवी टेक्नीशियन", r1:"सभी बड़े ब्रांड पर प्रशिक्षित", r2b:"असली स्पेयर पार्ट्स", r2:"वारंटी के साथ",
  r3b:"उसी दिन विज़िट", r3:"ज़्यादातर मामलों में", r4b:"साफ दाम", r4:"काम से पहले खर्च बताया जाता है",
  r5b:"घर पर सेवा", r5:"कुछ भी ले जाने की ज़रूरत नहीं", r6b:"रिपेयर, इंस्टॉल, खरीद और बिक्री", r6:"हर काम के लिए एक नंबर",
  brands_p:"हम सभी बड़े ब्रांड की सर्विस करते हैं",
  cat_h:"हमारा कैटलॉग", cat_p:"बड़ा देखने के लिए किसी भी पेज पर टैप करें।",
  tips_h:"उपकरण की देखभाल के टिप्स", tips_p:"छोटी आदतें जो बड़े रिपेयर खर्च से बचाती हैं।",
  sell_h:"अपना पुराना उपकरण बेचें", sell_p:"नया ले रहे हैं या घर बदल रहे हैं? बताइए आपके पास क्या है, हम WhatsApp पर दाम भेज देंगे। हम जांचे हुए पुराने उपकरण भी बेचते हैं।",
  sell_type:"उपकरण", choose:"चुनें", o_ac:"एसी", o_wm:"वॉशिंग मशीन", o_fr:"फ्रिज", o_gy:"गीज़र", o_mw:"माइक्रोवेव", o_ot:"अन्य",
  sell_age:"कितना पुराना है?", sell_age_ph:"जैसे 3 साल", sell_cond:"हालत", working:"चालू है", not_working:"खराब है",
  sell_btn:"WhatsApp पर दाम जानें",
  book_h:"रिपेयर विज़िट बुक करें", book_p:"फॉर्म भरें और WhatsApp पर भेजें। समय पक्का करने के लिए हम आपको कॉल करेंगे।",
  talk_b:"बात करना चाहते हैं?", photo_b:"समस्या की फोटो भेजें", chat_wa:"WhatsApp पर चैट करें",
  f_which:"कौन सा उपकरण?", f_brand:"ब्रांड", optional:"(ज़रूरी नहीं)", brand_ph:"जैसे LG, Samsung",
  f_problem:"क्या समस्या है?", problem_ph:"जैसे ठंडा नहीं कर रहा, पानी लीक हो रहा",
  f_date:"पसंदीदा तारीख", f_slot:"समय", slot0:"समय चुनें", slot1:"सुबह (9 – 12 बजे)", slot2:"दोपहर (12 – 3 बजे)", slot3:"शाम (3 – 7 बजे)",
  f_name:"आपका नाम", f_phone:"मोबाइल नंबर", phone_ph:"10 अंकों का नंबर", f_address:"पूरा पता और लैंडमार्क",
  e_appl:"उपकरण चुनें", e_problem:"समस्या कुछ शब्दों में लिखें", e_date:"तारीख चुनें", e_slot:"समय चुनें",
  e_name:"अपना नाम लिखें", e_phone:"सही 10 अंकों का मोबाइल नंबर लिखें", e_address:"लैंडमार्क के साथ पूरा पता लिखें",
  submit:"WhatsApp पर बुकिंग भेजें", note:"आपकी जानकारी के साथ WhatsApp खुलेगा। बस भेजें दबाएं।",
  faq_h:"अक्सर पूछे जाने वाले सवाल", visit:"आइए या कॉल करें", msg_wa:"WhatsApp पर मैसेज करें",
  d_prob:"हम ये समस्याएं ठीक करते हैं", d_work:"हम क्या करते हैं", d_book:"यह रिपेयर बुक करें", see:"पूरी जानकारी",
  done_h:"बस एक कदम बाकी", done_again:"WhatsApp फिर खोलें", done_more:"दूसरा उपकरण बुक करें",
  more:"और भी",
  hint3d:"घुमाने के लिए खींचें। बुक करने के लिए किसी उपकरण पर टैप करें।", tip_book:"बुक करने के लिए टैप करें"
};
const EN_EXTRA = { see:"See details", done_h:"Almost done", done_again:"Open WhatsApp again", done_more:"Book another appliance", more:"& more", tip_book:"Tap to book" };

const GALLERY = [
  {
    "src": "/images/catalogue/01.webp",
    "thumb": "/images/catalogue/01-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "Home appliance service and repair catalogue"
  },
  {
    "src": "/images/catalogue/02.webp",
    "thumb": "/images/catalogue/02-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "All services: repair, service and installation"
  },
  {
    "src": "/images/catalogue/03.webp",
    "thumb": "/images/catalogue/03-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "One stop solution for every appliance"
  },
  {
    "src": "/images/catalogue/04.webp",
    "thumb": "/images/catalogue/04-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "Our services overview"
  },
  {
    "src": "/images/catalogue/05.webp",
    "thumb": "/images/catalogue/05-thumb.webp",
    "w": 420,
    "h": 594,
    "alt": "Washing machine repair work process"
  },
  {
    "src": "/images/catalogue/06.webp",
    "thumb": "/images/catalogue/06-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "Washing machine and geyser repair"
  },
  {
    "src": "/images/catalogue/07.webp",
    "thumb": "/images/catalogue/07-thumb.webp",
    "w": 420,
    "h": 594,
    "alt": "Washing machine service"
  },
  {
    "src": "/images/catalogue/08.webp",
    "thumb": "/images/catalogue/08-thumb.webp",
    "w": 420,
    "h": 630,
    "alt": "A2Z Solution Point: repairing, sale and purchase"
  }
];

const ICONS = {
  ac:'<rect x="2" y="4" width="20" height="9" rx="2"/><path d="M6 9h12M7 17c0 1.5 1 2 1 3M12 16v5M17 17c0 1.5-1 2-1 3"/>',
  washer:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 6h16M8 4h.01M11 4h.01"/><circle cx="12" cy="14" r="4.5"/><path d="M10 14.5a2 2 0 0 0 3 1"/>',
  fridge:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 10h14M9 5v2M9 13v3"/>',
  microwave:'<rect x="2" y="5" width="20" height="14" rx="2"/><rect x="5" y="8" width="10" height="8" rx="1"/><path d="M18 9h.01M18 12h.01M18 15h.01"/>',
  geyser:'<rect x="6" y="2" width="12" height="16" rx="6"/><circle cx="12" cy="7" r="1.8"/><path d="M9 18v4M15 18v4M10 12h4"/>',
  chimney:'<path d="M9 2h6v8H9zM3 16l6-6h6l6 6z"/><path d="M8 19h.01M12 19h.01M16 19h.01"/>',
  freezer:'<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M9 3l3 3 3-3M9 21l3-3 3 3M3 9l3 3-3 3M21 9l-3 3 3 3"/>',
  ro:'<path d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0z"/><path d="M8.5 14a3.5 3.5 0 0 0 3.5 3.5"/>',
  buysell:'<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'
};
const svg = (id, cls="") => `<svg ${cls?`class="${cls}"`:""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id]}</svg>`;
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const waLink = (msg="Namaste A2Z Solution Point, I need help with an appliance.") =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`;
const openWA = (url) => { const a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener"; document.body.appendChild(a); a.click(); a.remove(); };
const smooth = () => matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

/* Language */
const EN = { ...EN_EXTRA };
document.querySelectorAll("[data-t]").forEach(el => { EN[el.dataset.t] ??= el.innerHTML; });
document.querySelectorAll("[data-tp]").forEach(el => { EN[el.dataset.tp] ??= el.placeholder; });
let lang = "en";
try { lang = localStorage.getItem("a2z-lang") === "hi" ? "hi" : "en"; } catch (e) {}
const t = (k) => (lang === "hi" ? HI[k] : EN[k]) ?? EN[k] ?? "";
const L = (o) => o[lang];

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => { const v = t(el.dataset.t); if (v) el.innerHTML = v; });
  document.querySelectorAll("[data-tp]").forEach(el => { el.placeholder = t(el.dataset.tp); });
  $("#langBtn").textContent = lang === "hi" ? "English" : "हिंदी";
  $("#langBtn").lang = lang === "hi" ? "en" : "hi";

  $("#tiles").innerHTML = SERVICES.map(s =>
    `<button class="tile" type="button" data-book="${s.id}">${svg(s.id)}${esc(L(s).short)}</button>`).join("");
  const other = lang === "hi" ? "en" : "hi";
  $("#cards").innerHTML = SERVICES.map(s =>
    `<button class="card" type="button" data-info="${s.id}"><span class="ic">${svg(s.id)}</span><span>
       <h3>${esc(L(s).name)}</h3><span class="hi-s">${esc(s[other].name)}</span><p class="s">${esc(L(s).summary)}</p><span class="more">${t("see")}</span>
     </span></button>`).join("");
  renderChips();
  $("#brands").innerHTML = BIZ.brands.map(b => `<li>${b}</li>`).join("") + `<li>${t("more")}</li>`;
  $("#footList").innerHTML = SERVICES.map(s => `<li><a href="#services" data-info="${s.id}">${esc(L(s).short)}</a></li>`).join("");
  $("#tipsList").innerHTML = TIPS.map(x =>
    `<div class="tip"><span class="tip-ic">${svg(x.icon)}</span><h3>${esc(L(x)[0])}</h3><p>${esc(L(x)[1])}</p></div>`).join("");
  $("#faqList").innerHTML = FAQ.map(x =>
    `<details><summary>${esc(L(x)[0])}</summary><p>${esc(L(x)[1])}</p></details>`).join("");
  if (dlg.open && current) fillInfo(current);
}
function renderChips() {
  const box = $("#chips"); if (!box) return;
  const sel = box.querySelector("input:checked")?.value;
  box.innerHTML = SERVICES.map(s =>
    `<label class="chip"><input type="radio" name="appliance" value="${s.id}" ${s.id === sel ? "checked" : ""}><span>${esc(L(s).short)}</span></label>`).join("");
}
$("#langBtn").onclick = () => {
  lang = lang === "hi" ? "en" : "hi";
  try { localStorage.setItem("a2z-lang", lang); } catch (e) {}
  render();
};

/* Static bits */
$("#brandList").innerHTML = BIZ.brands.map(b => `<option value="${b}">`).join("");
document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });
$("#mapLink").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(BIZ.address);
$("#yr").textContent = new Date().getFullYear();

/* Service details dialog */
const dlg = $("#dlg");
let current = null;
function fillInfo(id) {
  const s = SERVICES.find(x => x.id === id); if (!s) return;
  const d = L(s), other = lang === "hi" ? "en" : "hi";
  $("#dlgIcon").innerHTML = svg(id, "big");
  $("#dlgTitle").textContent = d.name;
  $("#dlgHi").textContent = s[other].name;
  $("#dlgSummary").textContent = d.summary;
  $("#dlgProblems").innerHTML = d.problems.map(p => `<li>${esc(p)}</li>`).join("");
  $("#dlgWork").innerHTML = d.work.map(p => `<li>${esc(p)}</li>`).join("");
  $("#dlgTypes").innerHTML = d.types.map(p => `<span>${esc(p)}</span>`).join("");
}
function openInfo(id) { current = id; fillInfo(id); dlg.showModal(); }
$("#dlgBook").onclick = () => { dlg.close(); pickAppliance(current); };

/* Catalogue lightbox */
const lb = $("#lb");
let gi = 0;
$("#gal").innerHTML = GALLERY.map((g, i) =>
  `<button type="button" data-gal="${i}" aria-label="${esc(g.alt)}"><img src="${g.thumb}" width="${g.w}" height="${g.h}" alt="${esc(g.alt)}" loading="lazy" decoding="async"></button>`).join("");
function showGal(i) {
  gi = (i + GALLERY.length) % GALLERY.length;
  $("#lbImg").src = GALLERY[gi].src; $("#lbImg").alt = GALLERY[gi].alt;
  $("#lbCount").textContent = `${gi + 1} / ${GALLERY.length}`;
}
$("#lbPrev").onclick = () => showGal(gi - 1);
$("#lbNext").onclick = () => showGal(gi + 1);
lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") showGal(gi - 1); if (e.key === "ArrowRight") showGal(gi + 1); });
let tx = null;
lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) showGal(gi + (dx < 0 ? 1 : -1)); tx = null; });

[dlg, lb].forEach(d => d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); }));

document.addEventListener("click", e => {
  const b = e.target.closest("[data-book]"); if (b) return pickAppliance(b.dataset.book);
  const i = e.target.closest("[data-info]"); if (i) { e.preventDefault(); return openInfo(i.dataset.info); }
  const g = e.target.closest("[data-gal]"); if (g) { showGal(+g.dataset.gal); lb.showModal(); }
});

/* Booking form */
const KEY = "a2z-customer";
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const loadSaved = () => { try { return JSON.parse(localStorage.getItem(KEY) || "null") || {}; } catch (e) { return {}; } };
const save = (o) => { try { localStorage.setItem(KEY, JSON.stringify({ ...loadSaved(), ...o })); } catch (e) {} };
function initFields() {
  const today = new Date(), maxD = new Date(); maxD.setDate(maxD.getDate() + 30);
  $("#date").min = iso(today); $("#date").max = iso(maxD); $("#date").value = iso(today);
  const s = loadSaved();
  ["name","phone","address"].forEach(k => { if (s[k] && !$("#" + k).value) $("#" + k).value = s[k]; });
}
function pickAppliance(id) {
  showForm();
  const r = document.querySelector(`input[name=appliance][value="${id}"]`);
  if (r) { r.checked = true; $("#w-appliance").classList.remove("invalid"); }
  $("#book").scrollIntoView({ behavior: smooth() });
  setTimeout(() => $("#problem").focus({ preventScroll: true }), 450);
}
const formHTML = $("#formBox").innerHTML;
function showForm() {
  if ($("#bookForm")) return;
  $("#formBox").innerHTML = formHTML;
  render(); bindForm(); initFields();
}
const clearOnInput = (form) => form.querySelectorAll("input,select,textarea").forEach(el =>
  el.addEventListener("input", () => el.closest(".fld")?.classList.remove("invalid")));
function flag(prefix, bad) {
  bad.forEach(k => $(`#${prefix}${k}`).classList.add("invalid"));
  if (bad.length) $(`#${prefix}${bad[0]}`).querySelector("input,select,textarea")?.focus();
  return bad.length === 0;
}
function bindForm() {
  const form = $("#bookForm");
  clearOnInput(form);
  form.addEventListener("submit", e => {
    e.preventDefault();
    const v = {
      appliance: form.querySelector("input[name=appliance]:checked")?.value || "",
      brand: $("#brand").value.trim(), problem: $("#problem").value.trim(),
      date: $("#date").value, slot: $("#slot").value, name: $("#name").value.trim(),
      phone: $("#phone").value.replace(/\D/g, "").slice(-10), address: $("#address").value.trim()
    };
    const bad = [];
    if (!v.appliance) bad.push("appliance");
    if (v.problem.length < 3) bad.push("problem");
    if (!v.date || v.date < $("#date").min) bad.push("date");
    if (!v.slot) bad.push("slot");
    if (v.name.length < 2) bad.push("name");
    if (!/^[6-9]\d{9}$/.test(v.phone)) bad.push("phone");
    if (v.address.length < 8) bad.push("address");
    if (!flag("w-", bad)) return;

    save({ name: v.name, phone: v.phone, address: v.address });
    const s = SERVICES.find(x => x.id === v.appliance);
    const niceDate = new Date(v.date + "T00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
    const url = waLink(
`Namaste A2Z Solution Point,
I want to book a repair visit.

Appliance: ${s.en.name}${v.brand ? " (" + v.brand + ")" : ""}
Problem: ${v.problem}
Date: ${niceDate}
Time: ${v.slot}

Name: ${v.name}
Phone: ${v.phone}
Address: ${v.address}`);
    openWA(url);
    const body = lang === "hi"
      ? `<b>${esc(s.hi.name)}</b> (${esc(niceDate)}) की बुकिंग के साथ WhatsApp खुल गया होगा। वहाँ भेजें दबाएं, हम ${esc(v.phone)} पर कॉल करके समय पक्का करेंगे।`
      : `WhatsApp should have opened with your booking for <b>${esc(s.en.name)}</b> on ${esc(niceDate)}. Press send there, and we'll call you on ${esc(v.phone)} to confirm.`;
    $("#formBox").innerHTML = `
      <div class="done" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg>
        <h3>${t("done_h")}</h3><p>${body}</p>
        <div class="acts">
          <a class="btn btn-green" href="${url}" target="_blank" rel="noopener">${t("done_again")}</a>
          <a class="btn btn-line" href="tel:+91${BIZ.phone}">${t("call_num")}</a>
        </div>
        <p style="margin-top:18px"><button type="button" class="btn btn-line" id="again" style="font-size:14px;padding:8px 14px">${t("done_more")}</button></p>
      </div>`;
    $("#again").onclick = () => { showForm(); $("#problem").focus(); };
  });
}

/* Sell form */
(function () {
  const form = $("#sellForm");
  clearOnInput(form);
  const s = loadSaved();
  if (s.name) $("#sName").value = s.name;
  if (s.phone) $("#sPhone").value = s.phone;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const v = { type: $("#sType").value, brand: $("#sBrand").value.trim(), age: $("#sAge").value.trim(),
      cond: $("#sCond").value, name: $("#sName").value.trim(), phone: $("#sPhone").value.replace(/\D/g, "").slice(-10) };
    const bad = [];
    if (!v.type) bad.push("type");
    if (v.name.length < 2) bad.push("name");
    if (!/^[6-9]\d{9}$/.test(v.phone)) bad.push("phone");
    if (!flag("sw-", bad)) return;
    save({ name: v.name, phone: v.phone });
    openWA(waLink(
`Namaste A2Z Solution Point,
I want to sell my old appliance.

Appliance: ${v.type}${v.brand ? " (" + v.brand + ")" : ""}
Age: ${v.age || "Not sure"}
Condition: ${v.cond}

Name: ${v.name}
Phone: ${v.phone}

I will send photos here.`));
  });
})();

render();
bindForm();
initFields();
