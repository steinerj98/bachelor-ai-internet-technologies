var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://broker.hivemq.com:1883')

client.on('connect', function () {
    client.subscribe('testtopic/1')  
})

client.on('message', function (topic, message) {
    console.log(message.toString())
})