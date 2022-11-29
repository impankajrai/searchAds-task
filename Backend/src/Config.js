require('dotenv').config()
const { default: mongoose } = require("mongoose")


module.exports.connectDatabase=()=>{
  mongoose.connect(process.env.CONSTRING, () => {
    console.log("Connected to Database")
})
}