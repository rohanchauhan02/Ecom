const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

const app = express();
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});
mongoose.connect("mongodb://localhost:27017/dbURI", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})
