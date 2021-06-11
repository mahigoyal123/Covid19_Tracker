import React, {useEffect, useState} from 'react'
//import './Covid.css';

const Covid = () => {

    const [data, setdata]= useState([]);

    const getCovidData = async ()=>{
        try{
          const res= await fetch('https://api.covid19india.org/data.json');
       const actualData =  await res.json();
       console.log(actualData.statewise[0]);
       setdata(actualData.statewise[0])
        }
        catch(err){
          console.log(err);
        }
      }
      
        useEffect(()=> {
           getCovidData();
        },[])


    return (
        <div>
            <h2 className="title">LIVE COVID19 CORONAVIRUS TRACKER</h2>
            <div class="row">
  <div className="column">
    <div className="card1">
      <h3>COUNTRY</h3>
      <p>INDIA</p>
      
    </div>
  </div>

  <div className="column">
    <div className="card2">
      <h3>RECOVERED</h3>
      <p>{data.recovered}</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card3">
      <h3>CONFIRMED</h3>
      <p>{data.confirmed}</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card4">
      <h3>DEATH</h3>
      <p>{data.deaths}</p>
    </div>
  </div>
  <div className="column">
    <div className="card5">
      <h3>ACTIVE</h3>
      <p>{data.active}</p>
    </div>
  </div>
  <div className="column">
    <div className="card6">
      <h3>UPDATED</h3>
      <p>{data.lastupdatedtime}</p>
      
    </div>
  </div>
</div>

        </div>
    )
}

export default Covid
