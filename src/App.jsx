import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/clients')
      .then((res) => res.json())
      .then((body) => setData(body.data))
      .catch(console.log)
  }, [])

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  })
  
  const currency = (number) =>{
    return formatter.format(Math.round(number))
  }
  
  return (
    <div className="App">
      <div className="header">
        <h2 className="main-heading"  > Hey user, here's a snapshot of how your clients are doing today</h2>
        <p className="sub-heading"  >Keeping their account accounts up to to date will make sure this info accurate</p>
      </div>

      <div className="connected">
      <h3> {data ? data.length: "No clients"} connected clients</h3>
      <p className="floating-box" >They have enough data to use Fluidly</p>


      {/* Search bar and connected bits */}
      <div id="connect-bar">
      <button >Connected ({data ? data.length: 0})</button>
      <button >All ({data ? data.length: 0})</button>
      <input type="text" id="search" placeholder="Find a client..."/>
      </div>

      </div>

      <div className="client-table">
        <table>
            <tr className="table-header">
              <th >Client</th>
              <th> Opening Cash</th>
              <th >Debtors</th>
              <th >Creditors</th>
              <th >Oct Revenue</th>
            </tr>
            {data.map((client) => 

            <tr>
            <td id="client-row">
              {client.name}
            </td>
            <td >
              {currency(client.openingBalance)}
            </td>
            <td>
              {currency(client.totalTradeDebtors)}
            </td>
            <td>
              {currency(client.totalTradeCreditors)}
            </td>
            <td >
              {currency(client.currentMonthRevenueAmount)}
            </td>

          </tr>

            )}
          </table>
      </div>
    </div>
  )
}

export default App
