const mongoose = require('mongoose')

const mongoConnectDataBase = () =>{
   mongoose.connect(process.env.MONGO_URI)
   .then((data)=>{
    console.log(`mongoDb connection fine on ${data.connection.host}`)
   })
   .catch((error)=>{
    console.log(`mongoDb connection error ${error}`)
   })
}

module.exports = mongoConnectDataBase;