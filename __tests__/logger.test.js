'use strict';

const logger = require( '../src/middleware/logger' );

describe( 'logger middleware', () => {
  let consoleSpy;
  const req = { method: 'get', path: 'test' };
  const res = {};
  const next = jest.fn();

  beforeEach( () => {
    consoleSpy = jest.spyOn( console, 'log' );//.mockImplementation();
  } );

  afterEach( () => {
    consoleSpy.mockRestore();
  } );

  it( 'should log all get requests', () => {
   
    logger( req, res, next );
    
    expect( consoleSpy ).toHaveBeenCalledWith( 'request info', 'get', 'test' );
    expect( next ).toHaveBeenCalledWith();// this means that there's no errors
  } );
} );