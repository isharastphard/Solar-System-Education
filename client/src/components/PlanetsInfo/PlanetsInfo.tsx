import React, { useEffect, useState } from "react";

function PlanetsInfo(props: any) {
  const [data, setData] = useState<any[]>([]);
  const [story, setStory] = useState<any[]>([]);

  const getStory = async () => {
    await fetch("/PlanetsDescriptions", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const filtered = myJson.filter(function (n: any) {
          return n.subject === props.name;
        });
        setStory(filtered);
      });
  };

  const getData = async () => {
    await fetch("/Planets", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const filtered = myJson.filter(function (n: any) {
          return n.englishName === props.name;
        });
        setData(filtered);
      });
  };

  useEffect(() => {
    getData();
    getStory();
  }, []);

  const splitParagraph = (text: string) :string[] => {
    const sentences = text.split(".");
    const paragraphs = [];

    let lastSplit = 0;
    for (let i = 0; i < sentences.length; i++) {
      if (i % 5 === 0 && i != 0) {
        paragraphs.push(sentences.slice(i - 5, i + 1).join("."));
        lastSplit = i;
      }
    }
    paragraphs.push(sentences.slice(lastSplit, sentences.length + 1).join("."));
    return paragraphs;
  };

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
              {splitParagraph(planetStory.info).map((paragraph:string) => <p style={{paddingLeft:'10%', paddingRight:'10%' }}> {paragraph}</p>)}
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
