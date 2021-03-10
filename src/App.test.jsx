import React from 'react'
import fetchMock from 'fetch-mock'
import App from './App'
import clients from '../clients.json'
import { renderAct } from './render'

beforeAll(() => {
  fetchMock.get('/clients', clients)
})

it('renders without crashing', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText("Hey, user, here's a snapshot of how your clients are doing today")).toBeInTheDocument()
})

it('says number of connected clients', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText("3 connected clients")).toBeInTheDocument()
})

it('says the name of the client', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText("Demo Company (UK)")).toBeInTheDocument()
})

it('has the correct opening balance of the client', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText("£1,761")).toBeInTheDocument()
})

it('has the correct debtors', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText("£9,195")).toBeInTheDocument()
})

