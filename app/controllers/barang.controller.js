const db = require("../models");
const Barang = db.barang;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const nama_barang = req.query.nama_barang;
    var condition = nama_barang ? {
        nama_barang: {
            [Op.iLike]: `%${nama_barang}%`
        }
    } : null;
    Barang.findAll({
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data barang."
            });
        });
};