const db = require("../models");
const Movie = db.movie;
const op = db.Sequelize.Op;

exports.create  = (req, res) => {
    if (!req.body.nombre){
        res.status(400).send({
            message: "Parametro no Puede estar Vacio"
        });
        return;
    }

    const movie = {
        nombre: req.body.nombre,
        sinopsis: req.body.sinopsis,
        actores: req.body.actores,
        duracion: req.body.duracion,
        tipo: req.body.duracion,
        categoria: req.body.categoria,
        anoLanzamiento: req.body.anoLanzamiento,
        director: req.body.director
    }

    Movie.create(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Movie.update(req.body, {
        where: {id : id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pelicula/Serie Acualizada"
                });
            } else {
                res.send({
                    message: "Error"
                });
            }
        })
}
exports.delete = (req, res) => {
    const id = req.params.id;
    Movie.destroy({
        where: {id : id}
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Pelicula/Serie Eliminada"
            });
            } else {
                res.send({
                    message: "Error"
            });
            
        }
    })
}
exports.find = (req, res) => {
    const id = req.params.id;
    Movie.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en id=" + id
            });
        });
};
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Movie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        });
};
exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Movie.findOne({
        where: { nombre: nombre }
    })
    .then(movie => {
        if (movie) {
            res.send(movie);
        } else {
            res.status(404).send({
                message: "Película no encontrada."
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error al buscar la película por nombre."
        });
    });
};
