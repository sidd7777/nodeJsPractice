const express = require('express');

const morgan = require('morgan');

const dotenv = require('dotenv');

const bootcamps = require('./routes/bootcamps');

const logger = require('./middleWare/logger');

dotenv.config({ path: "./config/config.env" });

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.use(logger);

app.use('/api/v1/bootcamps' , bootcamps);

app.listen(
    PORT,
    console.log(`Running in ${process.env.NODE_ENV} on port : ${PORT}`)
);
