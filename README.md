# Cómo Lo Hago: RabbitMQ

Código referente a la entrada [Como utilizar colas de mensajes con RabbitMQ – Parte II](http://codehero.co/como-utilizar-colas-de-mensajes-con-rabbitmq-parte-ii/), en la cual se explica paso a paso el funcionamiento y uso de la herramienta RabbitMQ.

***

Debes instalar primero el módulo `amqp`, dependencia principal de todos los *scripts*:

```sh
$ npm install amqp
```

Luego inicia el consumidor o servidor receptor:

```sh
$ node consumidor.js
```

Posteriormente para enviar un mensaje, inicia el *script* del publicador o cliente:

```sh
$ node publicador.js
```

Observa en la salida del consumidor como llegan los mensajes.

> Si detienes el consumidor y sigues enviando mensajes, estos no se perderán, permanecerán en la cola hasta que un nuevo consumidor sea levantando.

Si deseas probar la escalabilidad, levanta varios consumidores e inicia el publicador agresivo:

```sh
$ node publicador_agresivo.js
```

Podrás notar cómo se balancea la carga entre los diferentes consumidores.

***

El código que aquí se muestra se toma como base de los [tutoriales originales de RabbitMQ](https://github.com/rabbitmq/rabbitmq-tutorials), han sido adaptados al español, y en algunos casos simplificados para su explicación.


NOTA: Para poder usar la desde un pc remoto "var conexion = amqp.createConnection({url: "amqp://edgardo:edgardo@192.168.15.194:5672"});"
el usuario edgardo:edgardo debio ser creado primeramente en el servidor RabbitMQ.


http://stackoverflow.com/questions/27805086/how-to-connect-pika-to-rabbitmq-remote-server-python-pika

first step is to add another account to your rabbitMQ server. To do this in windows...

    open a command prompt window (windows key->cmd->enter)
    navigate to the "C:\Program Files\RabbitMQ Server\rabbitmq_server-3.6.2\sbin" directory ( type "cd \Program Files\RabbitMQ Server\rabbitmq_server-3.6.2\sbin" and press enter )
    enable management plugin (type "rabbitmq-plugins enable rabbitmq_management" and press enter)
    open a broswer window to the management console & navigate to the admin section (http://localhost:15672/#/users with credentials "guest" - "guest")
    add a new user (for example "the_user" with password "the_pass"
    give that user permission to virtual host "/" (click user's name then click "set permission")

Now if you modify the connection info as done in the following modification of send.py you should find success:


