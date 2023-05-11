import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./controllers/authController.js";
import episodeRouter from "./controllers/episodeController.js";
import recomendationsRouter from "./controllers/recomendationsController.js";
import suggestionsController from "./controllers/suggestionsController.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/episodes", episodeRouter);
app.use("/recomendations", recomendationsRouter);
app.use("/suggestions", suggestionsController);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(port, async () => {
  console.log("Server running on port: ", port);
});
