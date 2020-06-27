const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;
const Sq = require("sequelize");

exports.findAllDistinct = (req, res) => {
    const noorder = req.query.noorder;

    var orderCondition = noorder ? {
        noorder: {
            [Op.iLike]: `${noorder}`
        },
    } : null;

    Order.findAll({
            where: orderCondition,
            attributes: [
                [Sq.fn('DISTINCT', Sq.col('noorder')), 'noorder'],
                'tanggal',
                'nama_pelanggan'
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data order."
            });
        });
};

exports.findRekapHariDistinct = (req, res) => {
    const hari = req.params.hari;
    const noorder = req.query.noorder;

    var condition = noorder ? {
        tanggal: {
            [Op.eq]: new Date(hari),
        },
        noorder: {
            [Op.iLike]: `${noorder}`
        },
    } : {
        tanggal: {
            [Op.eq]: new Date(hari),
        }
    };

    Order.findAll({
            where: condition,
            attributes: [
                [Sq.fn('DISTINCT', Sq.col('noorder')), 'noorder'],
                'tanggal',
                'nama_pelanggan'
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data order."
            });
        });
};


exports.findRekapHari = (req, res) => {
    const hari = req.params.hari;
    const noorder = req.query.noorder;

    var condition = noorder ? {
        tanggal: {
            [Op.eq]: new Date(hari),
        },
        noorder: {
            [Op.iLike]: `${noorder}`
        },
    } : {
        tanggal: {
            [Op.eq]: new Date(hari),
        }
    };

    Order.findAll({
            where: condition
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data order."
            });
        });
};

exports.findSales = (req, res) => {
    const sales = req.params.kode_sales;
    const tglakhir = req.query.tanggalakhir;
    const tglawal = req.query.tanggalawal;

    Order.findAll({
            where: {
                kode_sales: {
                    [Op.iLike]: `${sales}`
                },
                tanggal: {
                    [Op.gte]: new Date(tglawal),
                    [Op.lte]: new Date(tglakhir)
                }
            },
            attributes: [
                [Sq.fn('DISTINCT', Sq.col('noorder')), 'noorder'],
                'tanggal',
                'kode_sales',
                'nama_sales'
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat mengambil data order."
            });
        });
};

exports.create = (req, res) => {
    if (!req.body.kode_sales) {
        res.status(400).send({
            message: "Kode sales tidak boleh kosong!"
        });
        return;
    } else if (!req.body.nama_sales) {
        res.status(400).send({
            message: "Nama sales tidak boleh kosong!"
        });
        return;
    } else if (!req.body.kode_pelanggan) {
        res.status(400).send({
            message: "Kode pelanggan tidak boleh kosong!"
        });
        return;
    } else if (!req.body.nama_pelanggan) {
        res.status(400).send({
            message: "Nama pelanggan tidak boleh kosong!"
        });
        return;
    } else if (!req.body.kode_barang) {
        res.status(400).send({
            message: "Kode barang tidak boleh kosong!"
        });
        return;
    } else if (!req.body.nama_barang) {
        res.status(400).send({
            message: "Nama barang tidak boleh kosong!"
        });
        return;
    } else if (!req.body.quantity) {
        res.status(400).send({
            message: "Kuantitas tidak boleh kosong!"
        });
        return;
    } else if (!req.body.satuan) {
        res.status(400).send({
            message: "Satuan tidak boleh kosong!"
        });
        return;
    } else if (!req.body.harga) {
        res.status(400).send({
            message: "Harga tidak boleh kosong!"
        });
        return;
    } else if (!req.body.noorder) {
        res.status(400).send({
            message: "Noorder tidak boleh kosong!"
        });
        return;
    } else if (!req.body.tanggal) {
        res.status(400).send({
            message: "Tanggal tidak boleh kosong!"
        });
        return;
    }

    const order = {
        // id: req.body.id,
        kode_sales: req.body.kode_sales,
        nama_sales: req.body.nama_sales,
        kode_pelanggan: req.body.kode_pelanggan,
        nama_pelanggan: req.body.nama_pelanggan,
        kode_barang: req.body.kode_barang,
        nama_barang: req.body.nama_barang,
        quantity: req.body.quantity,
        satuan: req.body.satuan,
        harga: req.body.harga,
        noorder: req.body.noorder,
        tanggal: req.body.tanggal
    };

    Order.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Beberapa kesalahan terjadi saat membuat data order."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Order.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Terjadi kesalahan saat mengambil data order dengan id=" + id
            });
        });
};

exports.findOrder = (req, res) => {
    const noorder = req.params.noorder;
    var condition = noorder ? {
        noorder: {
            [Op.iLike]: `${noorder}`
        }
    } : null;

    Order.findAll({
            where: condition,
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Terjadi kesalahan saat mengambil data order dengan id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Order.update(req.body, {
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order berhasil diperbarui."
                });
            } else {
                res.send({
                    message: `Tidak bisa update data order dengan id=${id}. Mungkin data order tidak ditemukan atau req.body kosong!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Terjadi kesalahan saat mengupdate data order dengan id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Order.destroy({
            where: {
                id: id
            }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order berhasil dihapus!"
                });
            } else {
                res.send({
                    message: `Tidak bisa menghapus data order dengan id=${id}. Mungkin data order tidak ditemukan!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Tidak bisa menghapus data order id=" + id
            });
        });
};