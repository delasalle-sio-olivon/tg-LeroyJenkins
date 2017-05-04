var bus = require('servicebus').bus({ url: "amqp://192.168.99.100" });

bus.listen('tweeter', function (event) {
  console.log(event);
});