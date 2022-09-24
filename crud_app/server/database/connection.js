
const mongoose = require('mongoose');

const connectDB= async () => {

    try{
            //mongodb connection string 
            const con = await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true
                // useFindAndModify: false,
                // useCreateIndex: true
            })

            console.log(`MongoDB connected:${con.connection.host}`);

    }catch(err){
        //console.error(err);
        //.exit(1);  
       if(err) throw err;
        console.log('connected to MongoDB')
    }

}

module.exports = connectDB;