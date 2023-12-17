
const express = require('express');
const cors = require( 'cors' );

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares: Funciones que añaden otra funcionalidad al webServer, una función que se ejecuta cuando se levanta el servidor
        this.midddlewares();

        // Rutas de la aplicación
        this.routes();
    }

    midddlewares() {

        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() ); //cualquier info que venga en un put, post o delete la va a intentar serializar a un json


        //Directorio público
        this.app.use( express.static('public') ); 
    }


    routes() {        // método para manejar las rutas
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;

