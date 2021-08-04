import React, { useEffect, useState } from "react";

function PlanetsInfo(props: any) {
  const [data , setData]=useState<string[]>([])

  const getData=()=>{
    fetch('planet_info.json'
    ,{
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const filtered= myJson.filter(function(n:any){
            console.log('\"'+n.englishName+'\" ');
            console.log('\"' + props.name+'\"')
            return n.englishName === props.name;
        })
        console.log(filtered);
        setData(filtered);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  //console.log(data.englishName);

  return (
    <div style={{ color: "Navy" }}> 
      <h2>This is {props.name}</h2>
    <div> {data.map((item:any) =>  <> <div> 
      {props.name}'s density: {item.density}<br></br>
      {props.name}'s gravity: {item.gravity}<br></br>
      {props.name !== 'Earth' && <div>Discovered by: {item.discoveredBy} on {item.discoveryDate}</div>}
    </div>

</>
)} </div>
    </div>
  )
}

export default PlanetsInfo;
