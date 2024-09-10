import express from "express";
import connect from "./connect";
import bookRouter from "./routes/bookRoutes";

const app = express();

app.use(express.json());

connect();

app.use("/", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// import express from "express";
// const app = express();

// app.get("/", function (req, res) {
//   const name = "Mariko";
//   name.toLocaleLowerCase()
//   res.send("Hello")
// });

// app.listen(3000);

// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("Maddison", new Date());

// const message = "hello";
// message();

// const user = {
//   name: "Mariko",
//   age: 39
// }

// user.email;

// const flipACoin = () => {
//   return Math.random < 0.5;
// }

// const value = Math.random() < 0.5 ? "smaller" : "bigger";

// if(value !== "smaller") {

// }
// else if(value === "bigger") {

// }
