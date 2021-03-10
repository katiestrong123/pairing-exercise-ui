import { render } from '@testing-library/react'
import App from './App'

/* you can ignore this test file -
it's here to run as part of our CI,
to make sure that our pairing exercise is ready for you to use */
describe('circleci frontend', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
