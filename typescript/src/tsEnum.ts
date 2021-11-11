// Definir valores para la orientación de nuestras fotografías >>>
// JS
//const landscape = 0;
//const square = 2;

//> TS
// enum> representación numérico>>
enum PhotoOrientation {
  Landscape, //0
  // > Puedes sumar valor ==> Landscape = 10 / 0 <
  Square, // >1 / 11<
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("Landscape", landscape);
//>
console.log(`Landscape`, PhotoOrientation[landscape]);
console.log(`Square`, PhotoOrientation[1]);
//> COUNTRY>>>>
enum Country {
  Mexico = "Mex",
  Colombia = "Col",
  EEUU = "USA",
  Espana = "Esp",
  England = "Eng",
}

const country: Country = Country.EEUU;
console.log(`Country`, country);
