let express = require('express')

let route = express()
let PORT = 8080

// Middleware
route.get('/', (req, res){
  res.send('<h1> What up FAM </h1>')
}

route.listen(PORT);
