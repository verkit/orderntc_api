module.exports = app => {
    const barang = require("../controllers/barang.controller.js");

    var router = require("express").Router();

    router.get("/", barang.findAll);

    app.use('/api/barang/', router);
};