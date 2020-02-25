let app = require('../server');
let testServer = require('supertest')

describe('Test the root path', () => {
    test('It should response 200 to the LOGOUT route', async () => {
        const response = await testServer(app).post('/api/user/logout')
        expect(response.statusCode).toBe(200)
    })
    
    test('should protect the /user route', async () => {
        const response = await testServer(app).get('/api/user')
        expect(response.statusCode).toBe(403)
    })
})