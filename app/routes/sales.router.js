module.exports = app => {
    const sales = require("../controllers/sales.controller.js");

    var router = require("express").Router();

    router.get("/", sales.findAll);

    app.use('/api/sales/', router);
};