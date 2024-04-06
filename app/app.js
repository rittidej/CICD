const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const cookieParser = require('cookie-parser');

// middleware
app.use(cors({
  origin: ['http://localhost:4200'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
const { branchRouter } = require('./routes/branch');
app.use('/branch', branchRouter);

if (process.env.NODE_ENV !== 'development') {
  const sequelize = require('./db');
  require('./models/branch');
  sequelize.sync({ alter: true });  
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

module.exports = app;