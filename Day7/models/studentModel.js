const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name:{
        type : String,
        required:[true,"please enter name"],
    },
    age:{
        type : Number,
        required:true,
        default:0,
    },
    rollno:{
        type : Number,
        required:true,
        default:0,
        unique : true,
    },
    major:{
        type : String,
        required:true,
    }
})

const std = mongoose.model('studentdet',studentSchema)
module.exports = std;