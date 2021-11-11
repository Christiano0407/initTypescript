export {};

let user: [number, string];
user = [4, `Chris`];

//> Mandar llamr>>
console.log(`All Date User: `, user);
console.log(`id`, user[0]);
console.log(`User`, user[1].length);

//> Tuplas con Varios valores>>
let userInfo: [number, string, boolean];
userInfo = [1, "Natasha", true];

console.log(`isPro`, userInfo);
console.log(`isPro: `, userInfo[1].length);
console.log(`ID: `, userInfo[0]);
console.log(`userBoolean`, userInfo[2]);

// Array con Tuplas >>>
let array: Array<[number, string]> = [];

array.push([1, "Luisa"]);
array.push([2, "Alma"]);
array.push([3, "Mauricio"]);

console.log("Array", array);

//> Uso de funciones de un Array >>
// LensQueen ==> LensQueen001>
array[2][1] = array[2][1].concat(`001`);
console.log(`User`, array[2]);
