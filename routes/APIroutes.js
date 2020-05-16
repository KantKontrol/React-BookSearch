const Books = require("../models/books");

module.exports = function(app){

    app.get("/api/books", (req,res) => {
        Books.find({}).then(data => {
            res.json(data);
        });
    });

    app.post("/api/books", (req,res) => {

        let data = req.body;

        Books.create({
            title: data.title,
            authors: data.authors,
            description: data.description,
            image: data.image,
            link: data.link
        }).then(response => {
            res.status(200).json(response);
        });
    });


    app.get("/api/books/:id", ({id},res) => {
        Books.findOne({_id: id}).then(data => {
            res.json(data);
        });
    });
}