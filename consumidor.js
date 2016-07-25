//Requerimos el módulo del protocolo AMQP.
var amqp = require('amqp');
//Establecemos la conexión con nuestro servidor de RabbitMQ.
//var conexion = amqp.createConnection({host: 'localhost'});
var conexion = amqp.createConnection({url: "amqp://edgardo:edgardo@192.168.15.194:5672"});
//Cuando la conexión está establecida proseguimos con lo siguiente:
conexion.on('ready', function(){
    console.log('Conexión exitosa con servidor');
    //Instanciamos la cola sencilla indicando la opción para que esta no sea eliminada cuando no existan más mensajes en ella. 
	conexion.queue('sencilla', {autoDelete: false}, function(cola){
        console.log('Conexión existosa con cola %s', cola.name);
        //Nos suscribimos a la cola (esto producirá que el programa se quede oyendo a la cola). 
		cola.subscribe(function(mensaje){
            //Imprimimos el mensaje cada vez que la cola recibe y nos envía.
			console.log('Mensaje recibido -> %s', mensaje.data.toString('utf-8'));
        });
    });
});
