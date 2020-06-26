const db = require("../models");
const Pelanggan = db.pelanggan;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const nama_pelanggan = req.query.nama_pelanggan;
    var condition = nama_pelanggan ? {
        nama_pelanggan: {
            [Op.iLike]: `%${nama_pelanggan}%`
        }
    } : null;
    Pelanggan.findAll({
            where: condition,
            order: [
                ['nama_pelanggan', 'ASC'],
            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data pelanggan."
            });
        });
};