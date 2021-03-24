module.exports = (sequelize, dataTypes) => {

    const alias = 'Users';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(45)
        },
        direccionId: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tablename: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Direccion, {
            as: 'direccion',
            foreignKey: 'direccionId'
        })
    }

    return User;
}