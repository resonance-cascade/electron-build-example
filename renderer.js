// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log('hi!')
console.log(process)

var cool = require('cool-ascii-faces')

console.log(cool())

try {
  var SerialPort = require('serialport')
  console.log(SerialPort)
} catch (e) {
  console.error(e)
  SerialPort = null
}

