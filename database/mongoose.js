const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log(error))

module.exports = mongoose