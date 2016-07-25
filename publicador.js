//Requerimos el módulo del protocolo AMQP que usaremos para comunicarnos con RabbitMQ.
var amqp = require('amqp');
//Requerimos un script local que nos ayudará a finalizar correctamente la conexión.
var helper = require('./amqp-hacks');
//Establecemos la conexión con nuestro servidor de RabbitMQ.
var conexion = amqp.createConnection({host: 'localhost'});
//var conexion = amqp.createConnection({url: "amqp://edgardo:edgardo@192.168.15.194:5672"});
// Cuando la conexión está establecida proseguimos con lo siguiente:
conexion.on('ready', function(){
    console.log('Conexión exitosa con servidor');

	// Construimos el mensaje.
    var mensaje = 'Hola CODEHERO. ' + new Date();
	// Enviamos el mensaje indicando la cola sencilla a la cual debemos enviarlo.
    conexion.publish('sencilla', mensaje);
    console.log('Mensaje enviado -> %s', mensaje);
	// Finalizamos la conexión.
    helper.safeEndConnection(conexion);
});
