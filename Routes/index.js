import express from "express";
import { DepartmentModel, EmployeeModel } from "../Models";
const testRoute = express.Router();

testRoute.get("/", async (req, res) => {
  try {
    const doListdepartments = DepartmentModel.find(
      { isActive: true },
      { dept_name: 1 }
    ).then(async (data, err) => {
      if (err) {
        throw new Error(err);
      }
      const totalDocs = await DepartmentModel.countDocuments();
      console.log(
        "🤩 ~ file: index.js:8 ~ testRoute.get ~ doListdepartments",
        data
      );
      res.status(201).json({
        success: true,
        message: "Data Added Successfully",
        result: data,
        totalDocs,
      });
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error,
      result: [],
    });
  }
  //   res.end();
});

testRoute.get("/:id", async (req, res) => {
  try {
    const doGetDept = await DepartmentModel.findOne({ _id: req.params.id });
    res.json({
      success: true,
      result: doGetDept,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error,
      result: [],
    });
  }
});
testRoute.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const checkDeptName = await DepartmentModel.findOne({ dept_name: name });
    if (checkDeptName) {
      return res.status(200).json({
        success: false,
        message: "Already Exist",
        result: [],
      });
    }
    const doAddRecord = await DepartmentModel.create({
      dept_name: name,
    });
    res.status(201).json({
      success: true,
      message: "Data Added Successfully",
      result: doAddRecord,
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: err,
      result: [],
    });
  }
});
testRoute.put("/:id", async (req, res) => {
  try {
    const doGetDept = await DepartmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      success: true,
      result: doGetDept,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error,
      result: [],
    });
  }
});
testRoute.delete("/:id", async (req, res) => {
  try {
    const doGetDept = await DepartmentModel.findByIdAndDelete(req.params.id, {
      new: true,
    });
    res.json({
      success: true,
      result: doGetDept,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: error,
      result: [],
    });
  }
});

export default testRoute;
