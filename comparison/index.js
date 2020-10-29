const express = require('express')
var cors = require('cors');
const axios = require('axios');
const app = express()
const port = 3002

const allowedOrigins = ['http://localhost:3000',
                      'http://auth.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.get('/', (req, res) => {
  axios.get('http://auth-clusterip-srv:3001/testcompare')
  res.send('Hello Comparison!')
})

app.get('/comparison', (req, res) => {
  axios.get('http://auth-clusterip-srv:3001/testcompare')
  res.send('Hello Comparison!')
})

app.get('/testcompare', (req, res) => {
  console.log('inside comparison test method!');
  res.send('inside comparison test method!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})