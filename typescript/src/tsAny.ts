// Tipo explicito>
let idUser: any; // Cualquier valor>
idUser = 1; // number
idUser = `Luisa`; //String
// Valor y Concatenar la variable>
console.log(`idUser`, idUser);

// Tipo inferido (any)>
let otherId;
otherId = 1;
otherId = "Alma";
console.log(`otherId`, otherId);

//
let surprise: any = "Hello Typescript / Javascript";
const res = surprise.substring(5);
console.log(`res`, res);
