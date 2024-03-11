const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const products = require('./models/Product')
require('dotenv').config();
const uri = process.env.MONGODB_URI;
app.use(cors());
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


app.listen(3000,() =>{
    console.log("Server is listening to port: 3000")
})