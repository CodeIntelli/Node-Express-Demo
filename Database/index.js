import mongoose from "mongoose";
// import { DB_URL } from "../../Config";
// import consola from "consola";
mongoose
  .connect(
    "mongodb+srv://farhan:farhan1234_@tutorial.zswfobg.mongodb.net/nodejs"
  )
  .then((data) => {
    console.log(`Mongo DB Connected`);
  })
  .catch((error) => {
    console.log(error);
  });
