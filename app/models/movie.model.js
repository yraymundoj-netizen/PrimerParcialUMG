module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define ("movie", {
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        anoLanzamiento: {
            type: Sequelize.INTEGER
        },
        director: {
            type: Sequelize.STRING
        }
    });
    return Movie;
};