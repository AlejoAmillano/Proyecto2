module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idserie: {
            type: DataTypes.INTEGER
        },
        idusuario: {
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        puntaje: {
            type: DataTypes.DOUBLE
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "resenias",
        timestamps: false
    };

    const Resena = sequelize.define("Resena", cols, config);
    
    Resena.associate = function(models) {
        Resena.belongsTo(models.User, {foreignKey: 'idusuario', as: 'usuario'})
    };

    return Resena;
    
}