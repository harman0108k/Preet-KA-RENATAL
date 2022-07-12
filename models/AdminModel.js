const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
     username : {type:String , required: true},
     password : {type:String , required: true}
})

const adminModel = mongoose.model('admins' , AdminSchema)

module.exports = adminModel