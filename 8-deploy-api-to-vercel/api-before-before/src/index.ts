import express from "express";
import connect from "./connect";
import bookRouter from "./routes/bookRoutes";

const app = express();

app.use(express.json());

connect();

app.use("/api/", bookRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
