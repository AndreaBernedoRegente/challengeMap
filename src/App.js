import React, {useMemo, useState} from 'react'
//import logo from './logo.svg';
import './App.css';
import {GoogleMap,InfoWindow} from '@react-google-maps/api'
import FilterMap  from './components/FilterMap';
import Loading from './components/Loading';
import './components/loading.css'
import Search from './components/Search'
import './components/search.css'
import useFetch from './api/useFetch'

const center = { lat: 19.435646, lng: -99.200398 }

function App() {

  //API key google maps
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // })

  //values selected
  const [selectType,setSelectType]=useState(0);
  const [selectTerm,setSelectTerm]=useState(0);
  
  const [spotWindow,setSpotWindow]=useState(null);

  

  //const [data,setData]=useState([]);
  const url='https://staging.spot2.mx/api/spots'
  const {data,isLoaded}=useFetch(url)

  // useEffect (()=>{
  //   //getData();
  //   (async function (){
  //     let data=await fetch(url,{
  //       method:'get',
  //       headers: {
  //         'Authorization' : 'Bearer 17|xmeRwhqYwnft4Witl0WIFzq2ipWLaSOoBXMceVtO'
  //       }}).then(res=>res.json());
      
  //       setData(data.data.spots);
  //   })();
  // },[url])

  const dataFilter =useMemo(()=>{
    let dataAux=[...data]
    if(selectType>0){
      return dataAux.filter((element)=>element.spot_type_id.toString()===selectType.toString())
    }

    if(selectTerm>0){
      return dataAux.filter((element)=>element.term.toString()===selectTerm.toString())
    }
    return dataAux
    
  },[data,selectType,selectTerm])

  
  console.log(dataFilter)

  if (!isLoaded) {
    return <Loading/>
  }

  return (
    <>
      <div style={{height: '100vh',
                  width: '100vw',
                  position: 'fixed',
                  top:0,
                  left:0
                  }}>  
        <GoogleMap
          
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          <FilterMap data={dataFilter} setSpotWindow={setSpotWindow}/>
         
         {spotWindow ? (
          <InfoWindow position={{lat:spotWindow.latitude, lng:spotWindow.longitude}}
                      onCloseClick={()=>{setSpotWindow(null)}}>
                        <div>
                          <h2>{spotWindow.name}</h2>
                          <p>{spotWindow.street}</p>
                        </div>
                      </InfoWindow>
         ):
         null}          
        </GoogleMap>
      </div>
      <Search selectType={selectType} selectTerm={selectTerm} setSelectType={setSelectType} setSelectTerm={setSelectTerm} />
    </>


  );
}

export default App;
