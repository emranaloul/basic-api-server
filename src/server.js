'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');


app.use(express.json());//post, put, patch
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/food', foodRoutes);
app.use('/api/v1/clothes', clothesRoutes);
app.use('*', notFoundHndler);
app.use(errorHandler);

/**
 * start
 * @param port
 */
function start( port ){
  app.listen( port, ()=>{
    console.log( `litening on PORT ${port}` );
  } );
}

module.exports ={
  app: app,
  start: start,
};