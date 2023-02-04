import { Schema, model } from "mongoose";

const departmentSchema = new Schema(
  {
    dept_name: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const deptModel = new model("Department", departmentSchema);

export default deptModel;
