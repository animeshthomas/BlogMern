const mongoose = require('mongoose');
const { type } = require('os');

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    },
    password:{
        type:String,
        requird:true
    }
})

module.exports = mongoose.model("BlogUser",usersSchema);