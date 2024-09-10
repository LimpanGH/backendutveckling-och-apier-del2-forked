import express from "express";
const app = express();

app.get("/", function (req, res) {
  const name = "Mariko";
  name.toLocaleLowerCas();
  res.send();
});

app.listen(3000);

// const message = () => { };
// message();

// const user = {
//     name: "Mariko",
//     age: 39,
// }
// user.email;

// const flipACoin = () => {
//     return Math.random < 0.5;
// }

// const value = Math.random() < 0.5 ? "smaller" : "bigger";

// if(value !== "smaller") {

// }
// else if(value === "bigger") {

// }
