import mongoose from "../database/index.js";

const SuggestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    contact: {
      type: String,
    },
    theme: {
      type: String,
    },
    whoSend: {
      type: String,
    },
  },
  { timestamps: true }
);

const Suggestion = mongoose.model("Suggestion", SuggestionSchema);

export default Suggestion;
