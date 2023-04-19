export const translation = {
    Aries: "Ariete",
    aries: "ariete",
    Taurus: "Toro",
    taurus: "toro",
    Gemini: "Gemelli",
    gemini: "gemelli",
    Cancer: "Cancro",
    cancer: "cancro",
    Leo: "Leone",
    leo: "leone",
    Virgo: "Vergine",
    virgo: "vergine",
    Libra: "Bilancia",
    libra: "bilancia",
    Scorpio: "Scorpione",
    scorpio: "scorpione",
    Sagittarius: "Sagittario",
    sagittarius: "sagittario",
    Capricorn: "Capricorno",
    capricorn: "capricorno",
    Aquarius: "Aquario",
    aquarius: "aquario",
    Pisces: "Pesci",
    pisces: "pesci",
    sun: "sole",
    moon: "luna",
    mercury: "mercurio",
    venus: "venere",
    mars: "marte",
    jupiter: "giove",
    saturn: "saturno",
    uranus: "urano",
    neptune: "nettuno",
    pluto: "plutone",
    chiron: "chirone",
    conjunction: "congiunzione",
    sextile: "sestile",
    square: "quadratura",
    trine: "trigono",
    opposition: "opposizione",
    "New Moon": "luna nuova",
    "First Quarter": "primo quarto",
    "Full Moon": "luna piena",
    "Last Quarter": "secondo quarto",
    Waxing: "crescente",
    Waning: "calante",
  };
  
  export const numberTranslation = {
    1: "prima",
    2: "seconda",
    3: "terza",
    4: "quarta",
    5: "quinta",
    6: "sesta",
    7: "settima",
    8: "ottava",
    9: "nona",
    10: "decima",
    11: "undicesima",
    12: "dodicesima",
  };
  export function translate(obj) {
    if (typeof obj === "string") {
      return (
        translation[obj] || numberTranslation[obj] || obj
      );
    } else if (typeof obj === "number") {
      return numberTranslation[obj] || obj;
    } else if (Array.isArray(obj)) {
      return obj.map((element) => translate(element));
    } else if (typeof obj === "object") {
      const newObj = {};
      for (const key of Object.keys(obj)) {
        // console.log('obj:', obj);

        newObj[translation[key] || key] = translate(obj[key]);
      }
      return newObj;
    } else {
      return obj;
    }
  }


  // export function translate(obj) {
  //   if (typeof obj === "string") {
  //     return translation[obj] || obj;
  //   } else if (typeof obj === "object") {
  //     const newObj = {};
  //     for (const key of Object.keys(obj)) {
  //       console.log(`key: ${key}, value: ${obj[key]}`);
  //       newObj[translation[key] || key] = translate(obj[key]);
  //     }
  //     return newObj;
  //   }
  //   return obj;
  
  
  