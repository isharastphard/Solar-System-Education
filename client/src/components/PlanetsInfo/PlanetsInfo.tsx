import React, { useEffect, useState } from "react";

function PlanetsInfo(props: any) {
  const [data , setData]=useState<string[]>([])

  const getData=()=>{
    fetch('quiz.json'
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
            console.log('\"'+n.subject+'\" ');
            console.log('\"' + props.englishName.toLowerCase()+'\"')
            return n.subject === props.englishName.toLowerCase()
        })
        console.log(filtered);
        setData(filtered);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const planet: any = [data];
  console.log(planet.englishName);

  return (
    <div style={{ color: "Navy" }}> This is {props.name} 
    <div> this is {props.name} info: {planet[1]}</div>
    </div>
  )
}

export default PlanetsInfo;
