// void
function showInfo(user: any) {
  console.log(`user info`, user.id, user.username, user.firstName);
  // Return "User info";
}

showInfo({
  id: 1,
  username: "Ana",
  firstName: "Layevska",
});

// Tipo Inferido>>
function showFormattedInfo(user: any) {
  console.log(
    `user info`,
    `
 id:${user.id}
 username:${user.username}
 firstName:${user.firstName}
 `
  );
}

showFormattedInfo({
  id: 5,
  username: "Pammela",
  firstName: "Velázquez",
});

// Tipo: Never ==>
function handleError(code: number, message: string): never {
  // Process your code here!
  // Generate message!
  throw new Error(`${message}, code:${code}`);
}
//> Error => Nunca retorna un valor>
try {
  handleError(404, "Not found");
} catch (error) {}
