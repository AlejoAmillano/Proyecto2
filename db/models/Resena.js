module.exports = (sequelize, DataTypes) => {

    let cols = {
        idresenias: {
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
        text_res: {
            type: DataTypes.STRING
        },
        fecha_de_creacion: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "resenias",
        timestamps: false
    };

    const Resena = sequelize.define("Resena", cols, config);

    return Resena;
    
}