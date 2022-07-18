const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./Controllers/register');
const signin = require('./Controllers/signin');
const profile = require('./Controllers/profile');
const image = require('./Controllers/image');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : 'Emmbrik.7E',
      database : 'face-recognition-brain'
    }
  });



const app = express();

app.use(bodyParser.json());
app.use(cors());




app.get('/', (req, res) => {  res.send(database.users)})
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', register.handleRegister(db, bcrypt))
app.get('/profile/:id', profile.handleProfile(db))
app.put('/image', image.handleImage(db))
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})







// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });



app.listen(3000, ()=> {
    console.log("app is runnin on port 3000");
})





/*
/ --> res = this is working
/signin --> POST success/fail
/register --> POST = user
/profile/: userId --> GET = user
/image --> PUT  --> user

*/