// Object es el tipo de dato que representa un valor no primitivo>>
// Es el tipo para variable que no sea "number" / "dtring" / "Boolean" / "null" / "undefined">>>
// type Object
let user: object;
user = {};

user = {
  id: 1,
  username: "Rick",
  firstName: "Rose",
  isPro: true,
};

console.log("user", user);
// en Ts no se puede leer directo una instancia (user.id)
//>
// > Object(mayúscula) vs object (minúscula) => Clase Js VS Ts <
const myObj = {
  id: 1,
  username: "Rick",
  firstName: "Rose",
  isPro: true,
};

const isInstance = myObj instanceof Object; //Clase Object => Js
console.log(`isIntance`, isInstance);
console.log(`user.username`, myObj.username);
