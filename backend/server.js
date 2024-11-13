const app = require('./app')
const dotenv = require('dotenv')
const mongoConnectDataBase = require('./config/mongoDbConnection')

dotenv.config({path:'./config/config.env'}) // setting up env to access it everywhere 

mongoConnectDataBase(); // connecting to mongodb


const server = app.listen(()=>{
    console.log(`server is working on ${process.env.BGURI}`)
})