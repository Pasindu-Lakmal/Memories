import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL =
  "mongodb+srv://memories:1594149pAS@cluster0.eblmegq.mongodb.net/?retryWrites=true&w=majority";

// const CONNECTION_URL =
//   "mongodb://memorise:1594149pAS@ac-92xe0ef-shard-00-00.gma5t5a.mongodb.net:27017,ac-92xe0ef-shard-00-01.gma5t5a.mongodb.net:27017,ac-92xe0ef-shard-00-02.gma5t5a.mongodb.net:27017/?ssl=true&replicaSet=atlas-io5daw-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
