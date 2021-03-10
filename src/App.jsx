import { useState, useEffect } from 'react'
import './App.css'
import FilterForm from './FilterForm';

const App = () => {
  const [data, setData] = useState([])
  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    fetch('/clients')
      .then((res) => res.json())
      .then((body) => setData(body.data))
      .catch(console.log)
  }, [])


  useEffect(() => {
    setFilteredClients(data);
  }, [data]);

  const filterData = (searchTerm) => {
    if (searchTerm){
      const someClients = data.filter((client) => {
        return client.name.toUpperCase().includes(searchTerm.toUpperCase());
      });
      setFilteredClients(someClients);
    } else {
      setFilteredClients(data)
    }
  };

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
        <h3> {filteredClients ? filteredClients.length: "No clients"} connected clients</h3>
        <p className="floating-box" >They have enough data to use Fluidly</p>
        <div id="connect-bar">
          <button >Connected ({filteredClients ? filteredClients.length: 0})</button>
          <button >All ({data ? data.length: 0})</button>
        <FilterForm filterData={filterData} />
        </div>

      </div>

      <div className="client-table">
        <table>
            <tr className="table-header">
              <th>Client</th>
              <th> Opening Cash</th>
              <th>Debtors</th>
              <th>Creditors</th>
              <th>Oct Revenue</th>
            </tr>
            {filteredClients.map((client) => 

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
