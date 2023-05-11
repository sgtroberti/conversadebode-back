import express from "express";
import Suggestion from "../models/suggestion.js";

const suggestionsController = express.Router();

suggestionsController.get("/", async (req, res) => {
  return res.send(await Suggestion.find());
});

suggestionsController.get("/:suggestionId", async (req, res) => {
  const suggestionId = req.params.suggestionId;
  return res.send(await Suggestion.findById(suggestionId));
});

suggestionsController.post("/", async (req, res) => {
  try {
    const newSuggestion = await Suggestion.create(req.body);
    return res.send(newSuggestion);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

suggestionsController.patch("/:suggestionId", async (req, res) => {
  const suggestionId = req.params.suggestionId;
  try {
    await Suggestion.findByIdAndUpdate(suggestionId, req.body);
    return res.status(203).send(await Suggestion.findById(suggestionId));
  } catch (error) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

suggestionsController.delete("/:suggestionId", async (req, res) => {
  const suggestionId = req.params.suggestionId;
  try {
    const deletedSuggestion = await Suggestion.findByIdAndDelete(suggestionId);
    return res.status(200).send(deletedSuggestion);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

export default suggestionsController;
