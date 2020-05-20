module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:  {
            type: DataTypes.STRING
        },
        ranking: {
            type: DataTypes.INTEGER
        },
    }

    let config = {
        tableName: "genres",
        timestamps: false
    };

    const Genero = sequelize.define("Genero", cols, config);

    Genero.associate = function(modelos) {

        Genero.hasMany(modelos.Serie, {
            as: "series",
            foreignKey: "genre_id"
        })

    }

    return Genero;
}