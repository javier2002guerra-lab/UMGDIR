const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('Deberia volver 200 y el texto esperado', async () => {
    const res = await request(app).get('/');    
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('DevOps funcionando correctamente');
  });
});
describe('GET /saludo', () => {
    it('Deberia de volver 200 y el mensaje esperado Json', async () => {
        const res = await request(app).get('/saludo');  
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('mensaje', 'Esta api esta ejecutandose en CI');
    });
});
