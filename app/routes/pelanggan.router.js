module.exports = app => {
    const pelanggan = require("../controllers/pelanggan.controller.js");

    var router = require("express").Router();

    router.get("/", pelanggan.findAll);

    app.use('/api/pelanggan/', router);
};