import mongoose from "../database/index.js";

const EpisodeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    date: {
      type: Date,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    youtube: {
      type: String,
    },
    spotify: {
      type: String,
    },
    interviewed: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Episode = mongoose.model("Episode", EpisodeSchema);

export default Episode;
