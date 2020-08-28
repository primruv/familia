const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('./database/mongoose')
const cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


const Customer = require('./database/models/customer')
app.use(express.json())

app.use(cors())

//add new customer
// app.post('/', (req, res) => {
//   (Customer.create({
//     'name': req.body.name, 'appleId': req.body.appleId, 'phoneNumber': req.body.phoneNumber, 'password': req.body.password, 'package': req.body.package, 'refferalCode': referralCode
//   })).then((customer) => res.send(customer))
//     .catch((error) => console.log(error))
// })

// Using Spread Operator
app.post('/api', (req, res) => {
  Customer.findOne({ email: req.body.email }).then((data) => {
    if (!data) {
      (Customer.create({
        ...req.body, refferalCode
      })).then((customer) => res.send(customer))
        .catch((error) => console.log(error))
    } else {
      res.send({ error: true, msg: 'error user already exist' })
    }
  }).catch((error) => console.log(error))

})


//get all customers
app.get('/api', (req, res) => {
  Customer.find({})
    .then(customer => res.send(customer))
    .catch((error) => console.log(error))
})

//get all customers
app.get('/api/:customerId', (req, res) => {
  Customer.find({ _id: req.params.customerId })
    .then((customer) => res.send(customer))
    .catch((error) => console.log(error))
})

//get one customer
app.get('/api/:customerId', (req, res) => {
  Customer.findOne({ _id: req.params.customerId })
    .then((customer) => res.send(customer))
    .catch((error) => console.log(error))
})

//update one customer
app.patch('/api/:customerId', (req, res) => {
  Customer.findOneAndUpdate({ '_id': req.params.customerId }, { $set: req.body })
    .then((customer) => res.send(customer))
    .catch((error) => console.log(error))
})


//generate refferal code
function randomString(length, chars) {
  var result = ''
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
  return result
}
var refferalCode = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

//check if the code generated is in the db
// add it if it does not exists in the db, else bounce registration and generate new refferal code

console.log(refferalCode)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./public'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;

//connecting to the server
app.listen(PORT, () => console.log("Server is connected on port 3000"))

