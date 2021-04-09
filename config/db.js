const monogoose = require('mongoose')
const dbConfig = require('./dbconfig')
const bodyParser = require('body-parser')

const connectDB = async() => {
    try{
        const connection = await monogoose.connect(dbConfig.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected');
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB