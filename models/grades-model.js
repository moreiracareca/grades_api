import mongoose from "mongoose";

const gradeShema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  subject: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  value: {
    required: true,
    type: Number,
  },
});

const gradeModel = mongoose.model("grades", gradeShema);
export default gradeModel;
