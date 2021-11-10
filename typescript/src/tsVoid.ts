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
