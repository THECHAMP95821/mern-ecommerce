const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("DB URL ",process.env.DB_URL);
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected on ${data.connection.host}`);
    })
    
};

module.exports = connectDatabase;