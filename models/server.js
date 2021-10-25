const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //middlerwareas 
        this.middlerwares();
        this.routes();
    }

    middlerwares() {
        this.app.use(cors());

    // Parse y lectura del body
    this.app.use( express.json() );


        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });

    }




}


module.exports = Server;