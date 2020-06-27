module.exports = app => {
    const order = require("../controllers/order.controller.js");

    var router = require("express").Router();

    router.get("/", order.findAllDistinct);
    router.post("/", order.create);
    router.get("/:id", order.findOne);
    router.get("/nomor/:noorder", order.findOrder);
    router.put("/:id", order.update);
    router.delete("/:id", order.delete);

    router.get("/sales/:kode_sales", order.findSales);
    router.get("/rekap/:hari", order.findRekapHari);
    router.get("/rekapd/:hari", order.findRekapHariDistinct);

    app.use('/api/order/', router);
    
};