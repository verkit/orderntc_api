module.exports = (sequelize, Sequelize) => {
    const Barang = sequelize.define("master_barang", {
        kode_barang: {
            type: Sequelize.STRING(6),
            primaryKey: true
        },
        nama_barang: {
            type: Sequelize.STRING(40)
        },
        hargajual1: {
            type: Sequelize.DOUBLE(12, 2)
        },
        hargajual2: {
            type: Sequelize.DOUBLE(12, 2)
        },
        hargajual3: {
            type: Sequelize.DOUBLE(12, 2)
        },
        satuan_beliakhir: {
            type: Sequelize.STRING(3)
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    }
    );

    return Barang;
};