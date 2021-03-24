module.exports = (sequelize, dataTypes) => {

    const alias = 'Direccion';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        street: {
            type: dataTypes.STRING(45)
        },
        address: {
            type: dataTypes.INTEGER
        },
        city: {
            type: dataTypes.STRING(45)
        },
        state: {
            type: dataTypes.STRING(45)
        },
        direccionId: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tablename: 'direcciones',
        timestamps: false
    }



    const Direccion = sequelize.define(alias, cols, config);

    return Direccion;
}