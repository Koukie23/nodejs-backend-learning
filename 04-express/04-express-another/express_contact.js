require('dotenv').config();

const express = require('express');

const contactRoutes = require('./routes/contactRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'hello'
  });
});

app.use('/contacts', contactRoutes);

app.get('/error', (req, res, next) => {
  const err = new Error('This is a test server error');

  next(err);
});


// 统一 404
app.use((req, res, next) => {
  const err = new Error('Route not found');

  err.status = 404;

  next(err);
});


// 统一错误处理
app.use((err, req, res, next) => {
  const status = err.status || 500;

  if (status >= 500) {
    console.error(err);
  } else {
    console.log(`${status} ${err.message}`);
  }

  res.status(status).json({
    message: err.message || 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(
    `Express server running at http://localhost:${PORT}`
  );
});