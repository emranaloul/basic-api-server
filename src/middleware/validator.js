'use strict';

const errorHandler = require( '../error-handlers/500' );

module.exports = ( req,res,next ) =>{
  if( Number( req.query.name || req.query.name === '' ) ){
    res.status( 500 ).send( errorHandler );
  }else{
    next();
  }
};