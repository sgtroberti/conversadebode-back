import express from "express";
import Episode from "../models/episode.js";

const episodeRouter = express.Router();

episodeRouter.get("/", async (req, res) => {
  return res.send(await Episode.find());
});

episodeRouter.get("/:episodeId", async (req, res) => {
  const episodeId = req.params.episodeId;
  return res.send(await Episode.findById(episodeId));
});

episodeRouter.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    if (await Episode.findOne({ title })) {
      return res.status(400).send({ error: "Episode already exists" });
    }
    const newEpisode = await Episode.create(req.body);
    return res.send(newEpisode);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

episodeRouter.patch("/:episodeId", async (req, res) => {
  const episodeId = req.params.episodeId;
  try {
    await Episode.findByIdAndUpdate(episodeId, req.body);
    return res.status(203).send(await Episode.findById(episodeId));
  } catch (error) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

episodeRouter.delete("/:episodeId", async (req, res) => {
  const episodeId = req.params.episodeId;
  try {
    const deletedEpisode = await Episode.findByIdAndDelete(episodeId);
    return res.status(200).send(deletedEpisode);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

export default episodeRouter;
