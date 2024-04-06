const request = require('supertest');
const app = require('../app');
const branch = require('../models/branch');
const sequelize = require('../db');
const { getReqBody } = require('../routes/branch')

describe('getReqBody', () => {
  it('should return an object with name property', () => {
    const body = { name: 'Test' };
    const result = getReqBody(body);
    expect(result).toEqual({ name: 'Test' });
  });
});

beforeAll(async () => {
  await sequelize.sync({ alter: true });
  await branch.create({
    name: 'insert beforeAll',
  });
});

afterAll(async () => {
  await branch.destroy({
    where: {},
    truncate: true
  });
});

describe('POST /insert', () => {
  it('should insert a new branch', async () => {
    const mockData = {
      name: 'insert',
    };
    const response = await request(app).post('/branch/insert/').send(mockData);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: mockData.name,
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      })
    );
  });
});

describe('GET /', () => {
  it('should return all branches', async () => {
    const response = await request(app).get('/branch/');
    expect(response.statusCode).toBe(200);
    response.body.data.forEach(item => {
      expect(item).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
        })
      );
    });
  });
});