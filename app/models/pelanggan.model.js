module.exports = (sequelize, Sequelize) => {
    const Pelanggan = sequelize.define("data_pelanggan", {
        kode_pelanggan: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        nama_pelanggan: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
    );

    return Pelanggan;
};