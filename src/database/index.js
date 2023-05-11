import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/conversadebode");
mongoose.Promise = global.Promise;

export default mongoose;

// "mongodb+srv://robertiTest:robertiTest@cluster0.xanxa.mongodb.net/vidracaria?retryWrites=true&w=majority"
