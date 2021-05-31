const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connection')

const app = express()

dotenv.config()
const port = process.env.PORT || 3000

//log requests
app.use(morgan('tiny'))

//mongodb.connection
connectDB();


//parse requests to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,'views/'))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))



//load routers
app.use('/',require('./server/routes/router'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
















