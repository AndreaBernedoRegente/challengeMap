import React from 'react'
import MapPointer from './MapPointer'
const FilterMap = ({data,setSpotWindow}) => {
  return (
    <>
      {data?.map((element,index)=>{
            return <MapPointer key={index} element={element} setSpotWindow={setSpotWindow}/>
          })}
    </>
  )
}

export default FilterMap
