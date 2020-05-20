module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DOUBLE
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: "actors",
        timestamps: false
    };

    const Actor = sequelize.define("Actor", cols, config);

    Actor.associate = function(modelos) {

        Actor.belongsTo(modelos.Serie, {
            as: "serieFavorita",
            foreignKey: "favorite_movie_id"
        })

        Actor.belongsToMany(modelos.Serie, {
            as: "seriesActuadas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })

    }

    return Actor;

}
