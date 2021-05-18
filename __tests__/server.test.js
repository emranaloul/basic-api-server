'use strict';

const server = require( '../src/server' );

const supertest = require('supertest');
const serverfn = supertest(server.app);

describe('Server test', ()=> {
  it('404 on a bad route', async () => {
    let res = await serverfn.get('/random');
    expect(res.status).toEqual(404);
  });
  it('404 on a bad method', async ()=> {
    let res = await serverfn.patch('/api/v1/food');
    expect(res.status).toEqual(404);
  });
});

describe('api server', () => {
  let id;
  it('should create a new food using post request', async () => {
    //arrange
    let food = {
      name: 'mansaf',
      country: 'jordan',
    };
    //act
    const response = await serverfn.post('/api/v1/food').send(food);
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('mansaf');
    expect(response.body.data.country).toEqual('jordan');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });

  it('should get a food using get request', async () => {
    //arrange
    let food = {
      name: 'mansaf',
      country: 'jordan',
    };
    //act
    const response = await serverfn.get('/api/v1/food').send(food);
    //assert

    expect(response.status).toEqual(200);
    expect(response.body[0].data.name).toEqual('mansaf');
    expect(response.body[0].data.country).toEqual('jordan');
    expect(response.body[0].id.length).toBeGreaterThan(0);
    
    
  });


  it('should read a specefic record', async () => {
    //arrange
    let Food = {
      name: 'mansaf',
      country: 'jordan',
    };
    //act
    const response = await serverfn.get(`/api/v1/food/${id}`).send(Food);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('mansaf');
    expect(response.body.data.country).toEqual('jordan');
    expect(response.body.id.length).toBeGreaterThan(0);
  });

  it('should update a food using put request', async () => {
    //arrange
    let editFood = {
      name: 'mansaf',
      country: 'palestine',
    };
    //act
    const response = await serverfn.put(`/api/v1/food/${id}`).send(editFood);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.data.country).toEqual('palestine');
  });
  it('should delete a food using delete request', async () => {
    //arrange
    let deleteFood = {
      name: 'mansaf',
      country: 'jordan',
    };
    //act
    const response = await serverfn.delete(`/api/v1/food/${id}`).send(deleteFood);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(undefined);
  });

  
});
