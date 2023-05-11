import mongoose from "../database/index.js";

const RecomendationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    creator: {
      type: String,
    },
    image: {
      type: String,
    },
    where: {
      type: String,
    },
  },
  { timestamps: true }
);

const Recomendation = mongoose.model("Recomendation", RecomendationSchema);

export default Recomendation;
