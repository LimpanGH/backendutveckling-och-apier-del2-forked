import express from "express";

const app = express();
const PORT = 3000;

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface RemappedUser {
  firstName: string;
  lastName: string;
  personId: string;
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/remap-user", (req, res) => {
  const user = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  };

  const remappedUser: RemappedUser = {
    firstName: user.name.split(" ")[0],
    lastName: user.name.split(" ")[1],
    personId: getTemporaryPersonId(user),
  };

  createRemappedUser(remappedUser);

  res.json(remappedUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Pretend that we write to a database
function createRemappedUser(user: RemappedUser) {
  console.log(
    `First Name: ${user.firstName}, Last Name: ${user.lastName}, Personal ID: ${user.personId}`
  );
}

function getTemporaryPersonId(user: User) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - user.age;
  return `${birthYear}0101-0000`;
}
