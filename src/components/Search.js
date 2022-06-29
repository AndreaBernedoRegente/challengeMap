import React from 'react'
const Search = ({selectType, selectTerm,setSelectType,setSelectTerm}) => {



  return (
    <div className="search-container">
    
            <select className="tittle" value={selectType} onChange={e=>setSelectType(e.target.value)}> 
              <option value={0}>All</option>
              <option value={1}>Street Spot</option>
              <option value={2}>In mall Spot</option>
              <option value={3}>In mall island</option>
              <option value={4}>Other</option>
            </select>
            <select className="tittle" value={selectTerm} onChange={e=>setSelectTerm(e.target.value)}> 
            <option value={0}>All</option>
              <option value={1}>Short Term</option>
              <option value={2}>Long Term</option>
              <option value={3}>Both</option>
            </select>
        
    </div>
  )
}

export default Search
