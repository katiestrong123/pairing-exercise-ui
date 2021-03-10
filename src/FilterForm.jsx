import {useState} from 'react';

const FilterForm = ({filterData}) => {

    const [filterKeyword, setFilterKeyword] = useState("");

    const handleChange = (event) => {
        setFilterKeyword(event.target.value)
        filterData(event.target.value)
    } 

    return (
        <div>
            <input className="filter-form" onChange={handleChange} type="text" value={filterKeyword} placeholder="Find a client..."/>

        </div>
    )
}

export default FilterForm;