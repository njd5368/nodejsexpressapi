const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    console.log("Server is working...")
    res.json( {msg: "Server is running..."});
});

router.get("/", (req, res) => {
    res.json({recipes: "array of recipes"});
});

router.post("/", (req, res) => {
    console.log(req.body.title, "recipe added")
    res.json({ recipes: "recipe added"});
});

router.delete("/", (req, res) => {
    res.json({ recipes: "recipe deleted"});
});

module.exports = router;