const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLenght: 50
    },
    lastName: {
        type : String,
    },
    emailId: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String, 
        validate: {
            validator: function(v) {
              if(!["male","female","others"].includes(v)){
                throw new Error("gender value is not correct")
              }
            }},
    },
    photoUrl: {
        type: String,
        defalut: "Link for a pic"
    }
}, { timestamps: true })


module.exports = mongoose.model("User", userSchema);
