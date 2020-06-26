const db = require("../models");
const Sales = db.sales;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const nama_sales = req.query.nama_sales;
    var condition = nama_sales ? {
        nama_sales: {
            [Op.iLike]: `%${nama_sales}%`
        }
    } : null;

    Sales.findAll({
            where: condition,
            order: [
                ['nama_sales', 'ASC'],
            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data sales."
            });
        });
};