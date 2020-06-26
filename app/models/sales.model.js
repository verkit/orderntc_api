module.exports = (sequelize, Sequelize) => {
    const Sales = sequelize.define("data_sales", {
        kode_sales: {
            type: Sequelize.STRING
        },
        nama_sales: {
            type: Sequelize.STRING
        },
        hp: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    }
    );

    return Sales;
};