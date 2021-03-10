import {useState} from 'react';
import './App.css'


const FilterForm = ({filterData}) => {

    const [filterKeyword, setFilterKeyword] = useState("");

    const handleChange = (event) => {
        setFilterKeyword(event.target.value)
        filterData(event.target.value)
    } 

    return (
        <div>
            <input className="connect-bar" id="search" onChange={handleChange} type="text" value={filterKeyword} placeholder="Find a client..."/>

        </div>
    )
}

export default FilterForm;