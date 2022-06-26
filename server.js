const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')();
const compression = require('compression');
// expressvalidator = require('express-validator');

// const { errors } = require('celebrate');
// const { requestMiddleware, errorMiddleware } = require('./src/utils/metrics');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
// app.use(expressvalidator());

// app.use(requestMiddleware);
// Load api routes

app.use('/', routes);
// app.use(errorMiddleware);
// app.use(errors())

/* eslint no-unused-vars: ["error", { "args": "none" }] */
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`${req.method} ${req.url} ${error.message}`);
  }
  return res.status(500).send({ error: error.message });
});

module.exports = app;
