import {useEffect, useState} from 'react';
import {useLoadScript} from '@react-google-maps/api'
const useFetch = (url) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      })

    const [data,setData]=useState([]);
    useEffect (()=>{
        //getData();
        (async function (){
          let data=await fetch(url,{
            method:'get',
            headers: {
              'Authorization' : 'Bearer 17|xmeRwhqYwnft4Witl0WIFzq2ipWLaSOoBXMceVtO'
            }}).then(res=>res.json());
          
            setData(data.data.spots);
        })();
      },[url])
    return {data,isLoaded}
}
 
export default useFetch;