const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const products = require('./models/Product')
const Login = require('./models/Login')
require('dotenv').config();
const uri = process.env.MONGODB_URI;
app.use(cors({}));  
app.use(express.json());
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.get('/product', async (req, res) => {
    try {
        const data = await products.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/Signin', async (req, res) => {
  const { email} = req.body;
  try {
    let user = await Login.findOne({ email });
    if (!user) {
        return res.status(404).json({ error : "User not found"});
      }
      return res.status(200).json({message : "Successful Login"});
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send('Internal server error');
  }
});

app.post('/Signup', async (req, res) => {
  const { username, email, mobile, password } = req.body;
  try {
    let user = await Login.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
    user = new Login({ username, email, mobile, password });
    await user.save();
    return res.status(200).json({message : "Data saved, Login to continue shopping"});
  } catch (error) {
    console.error('Error signing up:', error);
    return res.status(500).json({ error: error.message });
  }
});


app.listen(3000,() =>{
    console.log("Server is listening to port: 3000")
})