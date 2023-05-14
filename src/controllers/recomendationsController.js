import express from "express";
import Recomendation from "../models/recomendation.js";

const recomendationsController = express.Router();

recomendationsController.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page) || 1;
    const itemsPerPage = parseInt(limit) || 9;

    const totalItems = await Recomendation.countDocuments();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const response = await Recomendation.find()
      .skip((pageNumber - 1) * itemsPerPage)
      .limit(itemsPerPage);

    return res.send({ response, totalPages });
  } catch (error) {
    res.send({ error });
  }
});

recomendationsController.get("/all", async (req, res) => {
  try {
    const recommendations = await Recomendation.find();
    res.send(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocorreu um erro ao obter as recomendações.");
  }
});

recomendationsController.get("/:recomendationId", async (req, res) => {
  const recomendationId = req.params.recomendationId;
  return res.send(await Recomendation.findById(recomendationId));
});

recomendationsController.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    if (await Recomendation.findOne({ name })) {
      return res.status(400).send({ error: "Recomendation already exists" });
    }
    const newRecomendation = await Recomendation.create(req.body);
    return res.send(newRecomendation);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

recomendationsController.patch("/:recomendationId", async (req, res) => {
  const recomendationId = req.params.recomendationId;
  try {
    await Recomendation.findByIdAndUpdate(recomendationId, req.body);
    return res.status(203).send(await Recomendation.findById(recomendationId));
  } catch (error) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

recomendationsController.delete("/:recomendationId", async (req, res) => {
  const recomendationId = req.params.recomendationId;
  try {
    const deletedRecomendation = await Recomendation.findByIdAndDelete(
      recomendationId
    );
    return res.status(200).send(deletedRecomendation);
  } catch (err) {
    return res.status(400).send({ error: "Error: " + err });
  }
});

export default recomendationsController;
