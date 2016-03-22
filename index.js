const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.createReadStream('./data/cv.pdf').pipe(res)
})

server.listen(process.env.PORT || 8080, () => {
  console.log('Server Started')
})
