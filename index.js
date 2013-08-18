var http = require('http')
  , fs = require('fs')

var server = http.createServer(function (req, res) {
  var readStream = fs.createReadStream('./data/cv.pdf')
  readStream.pipe(res)
})

server.listen(process.env.PORT || 8080)  
console.log('Server Started');  