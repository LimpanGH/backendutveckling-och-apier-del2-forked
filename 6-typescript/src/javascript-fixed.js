import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/remap-user", (req, res) => {
  const user = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };

  const remappedUser = {
    firstName: user.name.split(" ")[0],
    lastName: user.name.split(" ")[1],
    personalId: getTemporaryPersonId(user),
  };

  createUser(remappedUser);

  res.json(remappedUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Pretend that we write to a database
function createUser(user) {
  console.log(
    `First Name: ${user.firstName}, Last Name: ${user.lastName}, Personal ID: ${user.personalId}`
  );
}

function getTemporaryPersonId(user) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - user.age;
  return `${birthYear}0101-0000`;
}
