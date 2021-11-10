//console.log("Hello first project");

// Example Number >>>
let phone: number[] = [5553124520];
//list = "Hola"; Error>
console.log(phone);
// Inferido>
let phoneNumber = 54545823;
phoneNumber = 123;
// Definir un valor Binario / Exadecimal>
let hex: number = 0xf00d;
let binary: number = 0b1010;

// Type Boolean >>>
let isPro: boolean;
isPro = true;
//isPro = 1; Error>
console.log(isPro);
// Inferido>
let isUserPro = false;
isUserPro = true;
console.log(isUserPro);

// String>
let userName: string = "Alma Rosa";
userName: "Luisa Cantú";
//userName = true
console.log(userName);

// Template String>
// Uso de back-tick
let userInfo: string;
userInfo = ` 
  User Info: 
  userName: ${userName}
  firstName: ${userName + `Chris Evans`}
  phone: ${phoneNumber}
  isPro: ${isUserPro}
`;
console.log(`userInfo`, userInfo);
