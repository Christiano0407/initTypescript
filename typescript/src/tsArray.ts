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
console.log(`allUsers`, allUsers[1]);
console.log(`All Month`, oneMonths[0]);

// <<< Propiedades en Array >>>
console.log(`allUsers.length`, allUsers.length);

// <<< Uso de funciones en Array / Methods >>>
allUsers.push(`Alejandra`);
allUsers.push(`Rodrigo`);
allUsers.sort(); // Ordenado
console.log(`New Users`, allUsers);
