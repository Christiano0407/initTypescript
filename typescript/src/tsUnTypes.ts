// Soportar Identificadores de Usuario>
//> `|`
export {};

let idUser: number | string;
idUser = 482518;
idUser = `Scarlet`;

// Buscar username dado con ID
function getUsernameById(id: number | string) {
  // Lógica de Negocio>
  return `Scarlet Light`;
}

getUsernameById(4);
getUsernameById(`10`);

// << Alias de tipos: TS >>
//> Evitar la redundancia de tipos>

//type idPerson = number | string; // En lugar de let idUser
//type userName = string;
//let  idPerson = idPerson;

//function getIdPerson(id: idPerson): userName {
//  return `Alexa`;
//}

//getIdPerson("Person");

// Tipos Literales >>
type SquareSize = `100x100` | `500x500` | `1500x5000`;
let smallPicture: SquareSize = `100x100`;
//let smallPicture: SquareSize = `500x100`; //Error => Valor no asignado
let mediumPicture: SquareSize = `500x500`;
let bigPicture: SquareSize = `1500x5000`;

console.log(`Small`, smallPicture);
console.log(`Medium`, mediumPicture);
console.log(`Big`, bigPicture);
