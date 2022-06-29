import React from 'react'
import {Marker} from '@react-google-maps/api'
const MapPointer = ({element,setSpotWindow}) => {
  return (
    <div>
      {element.is_public===1?

      <Marker position = {{lat:element.latitude, lng: element.longitude}} onClick={()=>setSpotWindow(element)}/>

    :
    null}
    </div>
  )
}

export default MapPointer
