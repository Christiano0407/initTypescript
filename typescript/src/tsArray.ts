// Ts permite definir un arreglo(Array) para contener un conjunto de valores.
// Usa dos notaciones => [] y Array<tipo>
//>>>>>
let allUsers: string[];
allUsers = [`Luisa`, `Natasha`, `Ana`, `Pamela`];
//names = [1, true, `test`]; ==> error > tipo: string.
//> (2)
//> Array<tipo>
let oneMonths: Array<string>;
oneMonths = [`January`, `December`, `March`, `September`, `July`];

//> Verificar cómo acceder a los valores de Array>>
console.log(`allUser`, allUsers[1]);
console.log(`All Month`, oneMonths[0]);
