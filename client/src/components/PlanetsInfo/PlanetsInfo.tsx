import React, { useEffect, useState } from "react";

function PlanetsInfo(props: any) {
    const [info, setinfo] = useState('')
  useEffect( () => {
    const fetchPlanets = async() =>{
        //await fetch(`/planets/${props.name}`)
        setinfo('planets info')
    };
    fetchPlanets();
  }, []);

  return (
    <div style={{ color: "Navy" }}> This is {props.name} 
    <div> this is {props.name} info: {info}</div>
    </div>
  )
}

export default PlanetsInfo;
