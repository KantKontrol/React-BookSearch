const Books = require("../models/books");
const mongojs = require("mongojs");

module.exports = function(app){

    app.get("/api/books", (req,res) => {
        Books.find({}, (error, data) => {
            if(error) console.log(error);

            res.json(data);
        });
    });

    app.post("/api/books", (req,res) => {

        let data = req.body;

        Books.create({
            _id: data.id,
            title: data.title,
            authors: data.authors,
            description: data.description,
            image: data.image,
            link: data.link
        }, (error) => {
            if(error) console.log(error);

            res.status(200).end();
        });
    });


    app.delete("/api/books/:id", (req,res) => {
        console.log(req.params.id);
        Books.deleteOne({ _id: mongojs.ObjectId(req.params.id) }, (error) => {
            if(error) console.log(error);
            res.status(200).end();
        });
    });
}