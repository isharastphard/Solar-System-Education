import React, { useEffect, useState } from "react";

function PlanetsInfo(props: any) {
  const [data, setData] = useState<any[]>([]);
  const [story, setStory] = useState<any[]>([]);

  const getStory = async () => {
    await fetch("/PlanetsDescriptions", { method: "GET" })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const filtered = myJson.filter(function (n: any) {
          return n.subject === props.name;
        });
        setStory(filtered);
      });
  };

  const getData = async () => {
    await fetch("/Planets", { method: "GET" })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        const filtered = myJson.filter(function (n: any) {
          console.log('"' + n.englishName + '" ');
          console.log('"' + props.name + '"');
          return n.englishName === props.name;
        });
        console.log(filtered);
        setData(filtered);
      });
  };

  useEffect(() => {
    getData();
    getStory();
  }, []);

  //console.log(data.englishName);

  return (
    <div style={{ color: "#fec604" }}>
      <h2>This is {props.name}</h2>
      <div>
        {story.map((planetStory: any) => (
          <>
            {" "}
            <div>
              {props.name}'s info:
              <br></br>
              {planetStory.info}
              <br></br>
            </div>
          </>
        ))}
      </div>
      <br></br>
      <div>
        {" "}
        {data.map((item: any) => (
          <>
            {" "}
            <div>
              {props.name}'s density: {item.density}
              <br></br>
              {props.name}'s gravity: {item.gravity}
              <br></br>
              {props.name !== "Earth" && (
                <div>
                  Discovered by: {item.discoveredBy} on {item.discoveryDate}
                </div>
              )}
            </div>
          </>
        ))}{" "}
      </div>
    </div>
  );
}

export default PlanetsInfo;
