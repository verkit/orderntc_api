module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("ordermst", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kode_sales: {
            type: Sequelize.STRING(4)
        },
        nama_sales: {
            type: Sequelize.STRING(50)
        },
        kode_pelanggan: {
            type: Sequelize.STRING(4)
        },
        nama_pelanggan: {
            type: Sequelize.STRING(100)
        },
        kode_barang: {
            type: Sequelize.STRING(6)
        },
        nama_barang: {
            type: Sequelize.STRING(40)
        },
        quantity: {
            type: Sequelize.DOUBLE(12,2)
        },
        satuan: {
            type: Sequelize.STRING(3)
        },
        harga: {
            type: Sequelize.STRING(12)
        },
        noorder: {
            type: Sequelize.STRING(12)
        },
        tanggal: {
            type: Sequelize.DATEONLY
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    return Order;
};