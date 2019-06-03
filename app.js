const express = require('express');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.logger('dev'));

module.exports = app;
