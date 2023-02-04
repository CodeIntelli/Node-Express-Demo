import express from "express";
import expressRoutes from "./Routes";
import "./Database/index";
const app = express();

app.use(express.json());

app.use("/api/v1/test", expressRoutes);

app.get("/", (req, res) => {
  res.send("CICD Testing");
});

app.listen(1284, () => {
  console.log("listening PORT", 1284);
});
