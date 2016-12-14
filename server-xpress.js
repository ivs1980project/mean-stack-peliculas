var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//conexion a la base de datos
mongoose.connect("mongodb://localhost/peliculas");

var Pelicula = mongoose.model("Pelicula", {
    titulo: String,
    director: String,
    sinopsis: String,
    fecha: String,
    id: Number
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((request, response, next) => {

    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
    next();
    //request.headers.origin --> con esta opcion saltamos el cross origin, permitimos todos los origenes
});

var routerRest = express.Router();
routerRest.route("/peliculas")

    .get((request, response) => {
        console.log("Acceso a la ruta ", request.path);
        var text = '{ "peliculas" : [' +
            '{ "titulo":"Los Goonies" , "director":"Doe" , "sinopsis": "Slot encuentra amigos", "fecha": "12/12/1990", "id": 1},' +
            '{ "titulo":"Terminator" , "director":"Jack" , "sinopsis": "Sayonara Baby", "fecha": "12/12/1991", "id": 2},' +
            '{ "titulo":"Rambo" , "director":"Mick" , "sinopsis": "No siento las piernas", "fecha": "12/12/1994", "id": 3},' +
            '{ "titulo":"El golpe" , "director":"Newman" , "sinopsis": "Vaya con la tropa", "fecha": "12/12/1950", "id": 4} ]}';

        var data = JSON.parse(text);
        response.send(data.peliculas);
    }).post((request, response) => {
        //Recoger la informacion del body para crear una nueva peli
        var peli = new Pelicula(
            {
                titulo: request.body.titulo,
                director: request.body.director,
                sinopsis: request.body.sinopsis,
                fecha: request.body.fecha
            });
        peli.save((error) => {
            if (error) {
                console.error("Error al guardar: ", error);
            } else {
                console.log("Guardado correctamente");
            }
        })

        console.log(request.body);
        response.json({ message: "correcto" });
    });

routerRest.route("/peliculas/:id")
    .get((request, response) => {
        console.log("Get ", request.path);
        console.log("Get ", request.body);
        //TODO: Obtener la pelicula a partir de idPelicula
        response.json({ _id: 1, marca: "opel", modelo: "corsa" });
    })
    .delete((request, response) => {
        console.log("Delete ", request.path);
        console.log("Delete ", request.body);
        //TODO: Eliminar la pelicula a partir de idPelicula
        response.json({ message: "eliminado" });
    })
    .put((request, response) => {
        console.log("Put ", request.path);
        console.log("Put ", request.body);
        //TODO: Modificar la pelicula a partir de idPelicula
        response.json({ message: "actualizado" });
    });

app.use("/", routerRest);

app.listen(3000);
console.log("Servidor iniciado")


