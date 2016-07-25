var amqp = require('amqp');
var helper = require('./amqp-hacks');

//var conexion = amqp.createConnection({host: 'localhost'});
var conexion = amqp.createConnection({url: "amqp://edgardo:edgardo@192.168.15.194:5672"});

conexion.on('ready', function(){
    console.log('Conexión exitosa con servidor');

    for(var i=0; i<10000; i++){
        var mensaje = 'Edgardo. ' + i;
        conexion.publish('sencilla', mensaje);
        console.log('Mensaje enviado -> %s', mensaje);
    }

    helper.safeEndConnection(conexion);

});
