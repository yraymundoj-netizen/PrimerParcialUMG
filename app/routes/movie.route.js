module.exports = app => {
    const movie = require("../controllers/movie.controller");
    var router = require("express").Router();
    router.get("/findAll/", movie.findAll);
    router.post("/create", movie.create);
    router.get("/get/:id", movie.find);
    router.get("/findByName/:nombre", movie.findByName);
    router.delete("/delete/:id", movie.delete);
    router.put("/update/:id", movie.update);
    app.use("/api/movie", router); 
};