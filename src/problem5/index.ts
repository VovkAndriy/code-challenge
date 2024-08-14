import express from "express";
import Mongoose from "mongoose";
import ApiRouter from "./routes/api.route";
const app = express();
const port = 8080;

app.use(express.json());
app.use("/api", ApiRouter);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}/`);
  await Mongoose.connect("mongodb://localhost:27017/resources");
});
