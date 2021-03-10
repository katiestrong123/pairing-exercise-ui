import request from 'supertest'
import expressApp from '../createApp'

/* you can ignore this test file -
it's here to run as part of our CI,
to make sure that our pairing exercise is ready for you to use */
describe('circleci backend', () => {
  it('should return 200 OK', async () => {
    const response = await request(expressApp).get('/clients').expect(200)
    expect(response.body.data.length).toBe(3)
  })
})
