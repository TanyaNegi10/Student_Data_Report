const express = require("express");
const router = express.Router();

const { createData } = require("../controllers/create");
const { updateData } = require("../controllers/update");
const { deleteData } = require("../controllers/delete");

router.post("/create", createData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deleteData);

module.exports = router;