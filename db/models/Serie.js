module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        length: {
            type: DataTypes.INTEGER
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: "movies",
        timestamps: false
    };

    const Serie = sequelize.define("Serie", cols, config);

    Serie.associate = function(modelos) {

        Serie.belongsTo(modelos.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        })

        Serie.hasMany(modelos.Actor, {
            as: "favoriteadaPor",
            foreignKey: "favorite_movie_id"
        });

        Serie.belongsToMany(modelos.Actor, {
            as: "actuaciones",
            through: "actor_movie",
            otherKey: "actor_id",
            foreignKey: "movie_id",
            timestamps: false
        })
    }

    return Serie;

}
