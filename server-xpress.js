var express = require('express');
var app = express();

app.use((request, response, next) => {

    request.header('Content-type', 'application/json');
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Headers', 'Authorization');
    next();
    //request.headers.origin --> con esta opcion saltamos el cross origin, permitimos todos los origenes
});
function evaluaElVerboHttp(request, response) {
    console.log(request);
    response.send("Ruta: " + request.originalUrl + " verbo: " + request.method);
}
app.get("/peliculas22",
    (request, response) => {
        console.log("Acceso a la ruta ", request.path);
        var text = '{ "peliculas" : [' +
            '{ "titulo":"Los Goonies" , "director":"Doe" , "sinopsis": "Slot encuentra amigos", "fecha": "12/12/1990", "id": 1},' +
            '{ "titulo":"Terminator" , "director":"Jack" , "sinopsis": "Sayonara Baby", "fecha": "12/12/1991", "id": 2},' +
            '{ "titulo":"Rambo" , "director":"Mick" , "sinopsis": "No siento las piernas", "fecha": "12/12/1994", "id": 3},' +
            '{ "titulo":"El golpe" , "director":"Newman" , "sinopsis": "Vaya con la tropa", "fecha": "12/12/1950", "id": 4} ]}';

        var data = JSON.parse(text);
        response.send(data.peliculas);
    });


app.post("/peliculas2", evaluaElVerboHttp);
app.put("/peliculas2", evaluaElVerboHttp);
app.delete("/peliculas2", evaluaElVerboHttp);
app.all("/paratodos", evaluaElVerboHttp);
app.all("/inicio/*/fin", evaluaElVerboHttp);
app.all("/clientes/:idCliente/facturas/:idFactura",
    (request, response) => {
        response.send("Resultados: \n\tCliente: " + request.params.idCliente +
            "\n\tFactura: " + request.params.idFactura
            + "\n\tJSON: " + JSON.stringify(request.params));
        //Envia el dato en formato json
        //response.json(request.params);
        //Descarga un fichero que le indiquemos
        //response.download('./imagen.png');
    });
app.get("/save/:fichero.:extension", (request, response) => {
    response.send("Ahora genero un fichero de tipo : " +
        request.params.extension)
});
function funcionIntermedia(request, response, next) {
    console.log("Ejecutado a las  " + new Date());
    //response.send("Fin");
    next();
}
app.get("/concatenado",
    funcionIntermedia,

    (request, response) => {
        response.send("Enviado");
    });

app.route("/rutaconjunta")
    .get(evaluaElVerboHttp)
    .post(evaluaElVerboHttp)
    .put(evaluaElVerboHttp)
    .delete(evaluaElVerboHttp);

var router = express.Router();
router.use(funcionIntermedia);
router.get("/conrouter", evaluaElVerboHttp);
router.post("/conrouterPost", evaluaElVerboHttp);
router.put("/conrouterPut", evaluaElVerboHttp);
router.delete("/conrouterDelete", evaluaElVerboHttp);

app.use("/cosacuca", router);


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
        //Recoger la informacion del body para crear un nuevo coche
        console.log(request.data);
        console.log(request.params);
        response.json({ message: "correcto" });
    });

routerRest.route("/coches/:alias")
    .get((request, response) => {
        //TODO: Obtener el coche a partir de su idCoche
        response.json({ _id: 1, marca: "opel", modelo: "corsa" });
    })
    .delete((request, response) => {
        //TODO: Eliminar el coche a partir de su idCoche
        response.json({ message: "eliminado" });
    })
    .put((request, response) => {
        //TODO: Modificar el coche a partir de su idCoche
        response.json({ message: "actualizado" });
    });

app.use("/", routerRest);




app.listen(3000);
console.log("Servidor iniciado")


