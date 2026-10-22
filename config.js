// ====================================================================
// CARRAA BIIFTUU -- MASTER CLIENT CONFIGURATION (WHITE-LABEL)
// Maamila haaraaf yeroo jijjiirtu as qofa sirreessi!
// ====================================================================

const APP_CONFIG = {
  // 1. BRANDING & MAQAA MAAMILAA
  BRAND_NAME: "Carraa Biiftuu",
  BRAND_SLOGAN: "Sirna Qulqulluu fi Amansiisaa Carraa Bituu",
  BRAND_ICON: "🌟",

  // 2. HERREGA & GATII CARRAA
  TICKET_PRICE: 1000, // Gatii carraa tokkoo (ETB)
  TOTAL_TICKETS: 1000, // Baay'ina carraa waliigalaa
  MAX_QTY_PER_ORDER: 10, // Nama tokkoof hanga meeqaa
  CURRENCY: "ETB",

  // 3. BADHAASOTA (1FFAA, 2FFAA, 3FFAA)
  PRIZES: {
    first: {
      rank: "🥇",
      title: "Badhaasa 1ffaa: Konkolaataa / Mallaqa Guddaa",
      desc: "Badhaasa qaalii fi addaa isa ol'aanaa marsaa kanaa."
    },
    second: {
      rank: "🥈",
      title: "Badhaasa 2ffaa: Mootarsayikilii / Laappitooppii",
      desc: "Meeshaa ammayyaa tajaajila addaa qabu."
    },
    third: {
      rank: "🥉",
      title: "Badhaasa 3ffaa: Smart Phone / Mallaqa Callaa",
      desc: "Bilbila ammayyaa fi badhaasa jajjabeessaa."
    }
  },

  // 4. LAKKOOFSA BAANKII MAAMILAA (RECEIVER ACCOUNTS)
  ACCOUNTS: {
    Telebirr: { number: "0909506573", name: "Lemma Asefa" },
    CBE: { number: "1000342728743", name: "Lemma Asefa" },
    BOA: { number: "212322628", name: "Lemma Asefa" },
    Awash: { number: "013351316799600", name: "Lemma Asefa" }
  },

  // 5. ODEEFFANNOO QUNNAMTII (SUPPORT & CONTACT)
  SUPPORT_PHONE: "+251909506573",
  SUPPORT_TELEGRAM: "https://t.me/CarraaBiiftuu",
  SUPPORT_EMAIL: "support@carraabiiftuu.com",
  
  // 6. VIIDIYOO RAGAA (YOUTUBE / PROMO LINK)
  PROMO_VIDEO_EMBED: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",

  // 7. GOOGLE APPS SCRIPT BACKEND URL (Maamila haaraaf kan isaa itti naqama)
  WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxrJMFYrybfQVMW8cWTN7r9uY8NtAKxsRg0BMYZPjwYGd0syqijTVvrG8xHB643oDz6/exec"
};
