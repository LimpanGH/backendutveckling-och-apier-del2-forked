import 'dotenv/config'
import express from "express";
import connect from "./connect";
import bookRouter from "./routes/bookRoutes";

const app = express();
app.use(express.json());

connect();

app.get("/", (req, res) => {
    res.json( { message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄"})
}); 

app.use("/api/", bookRouter);

export default app;

