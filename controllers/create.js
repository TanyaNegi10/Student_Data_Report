const express = require("express");
const student = require("../models/newModel");
const app = express();

app.use(express.json());

exports.createData = async (req, res) => {
  try {
    const { name, age, marks } = req.body;

    const result = await student.create({
      name,
      age,
      marks,
      createdBy: req.user._id,
    });
    console.log(name+"name");
    console.log(result);
    res.redirect(`/display?nm=${name}&ag=${age}&mks=${marks}`);
  } catch (err) {
    res.status(503).json({
      message: "Error Occurred!",
    });
  }
};