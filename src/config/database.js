const mongoose = require('mongoose');   

const connectDB = async () => {
   await mongoose.connect('mongodb+srv://vinayaknehal69:TmVWhUJ2uieEK6Xk@cluster0.mdpqs.mongodb.net/devTinder')
}



module.exports = connectDB




