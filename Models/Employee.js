import mongoose, { Schema, model } from "mongoose";

const EmployeeSchema = new Schema(
  {
    emp_name: {
      type: String,
      required: true,
      trim: true,
    },
    dept_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Department",
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const deptModel = new model("department", EmployeeSchema);

export default deptModel;
