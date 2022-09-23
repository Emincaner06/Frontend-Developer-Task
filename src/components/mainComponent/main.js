import React, { Component, useEffect, useState } from "react";
import "./main.css";
const getdata = (correctAnswer, allQuestions) => {
  const array1 = [1, 2, 3];

  console.log(array1.includes(2));
  var remainQuestions = allQuestions.filter((n) => !correctAnswer.includes(n));
  return remainQuestions;
};

function Main() {
  // Declare a new state variable, which we'll call "count"
  const questions = [
    {
      id: 1,
      image: "image1.png",
      serbian: "srećan",
      english: "happy",
    },
    {
      id: 2,
      image: "image2.png",
      serbian: "lijepo",
      english: "nice",
    },
    {
      id: 3,
      image: "image3.png",
      serbian: "prijatelju",
      english: "friend",
    },
    {
      id: 4,
      image: "image4.png",
      serbian: "eksplozija",
      english: "explosion",
    },
    {
      id: 5,
      image: "image5.png",
      serbian: "šargarepa",
      english: "carrot",
    },
    {
      id: 6,
      image: "image6.png",
      serbian: "auto",
      english: "car",
    },
    {
      id: 7,
      image: "image7.png",
      serbian: "vojnik",
      english: "soldier",
    },
    {
      id: 8,
      image: "image8.png",
      serbian: "strah",
      english: "fear",
    },
    {
      id: 9,
      image: "image9.png",
      serbian: "relativnost",
      english: "relativity",
    },
    {
      id: 10,
      image: "image10.png",
      serbian: "relativity",
      english: "book",
    },
    {
      id: 11,
      image: "image11.png",
      serbian: "Zemlja",
      english: "Earth",
    },
    {
      id: 12,
      image: "image12.png",
      serbian: "ograničenje brzine",
      english: "speed limit",
    },
  ];
  const [allQuestions, setAllQuestions] = useState(questions);
  const [randomData, setRandomData] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    setRandomData(randomObject);
  };
  useEffect(() => {
    getRandomObject(allQuestions);
  }, []);

  const doControl = (e, data) => {
    e.preventDefault(); // do something here
    if (textInput.current.value == data.serbian) {
      var temp=correctAnswer;
      temp.push(data.id);
      setCorrectAnswer([...new Set(temp)]);
      console.log("true");
    } else {
      console.log("false");

      var temp=wrongAnswer;
      temp.push(data.id);
      setWrongAnswer([...new Set(temp)]);
    }
    console.log(textInput.current.value, data,correctAnswer,wrongAnswer);
  };
  let textInput = React.createRef();
  return (
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/4868/c6fd/a5ea52463ffc15d7c193943934f7203c?Expires=1664755200&Signature=HfDoSMiVLFnEFQ1y1koNz8J2beB4WeL0XKffao-ZLiTvV7YjvMT86xuslBEEobM8qXqtOsCzw53jBpJu83oxPOjlBcnKucDVvWTaLPfy1742HdMP7c3wYthbcIBI3j79VGK09HfTW6xh1ArDH-hVXVcm7Y839Hz6xXjIV~5ZJb9dsA1xEem5deMdKv1oSmRLYlhtNQAhSa75Jm4s~5dDcMtTlW9pj0qjQCAagb3J514PDHREtnWTgTXEL8qNz71A0oPtnV6w5K3tfyOQE66X1B3ZFy2C7g1Y~Pik1iGGOM44~l62bVIbd2r8bCFtV0FVDbBIApWAd~IkOLmgotlcUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        className="logo"
      ></img>

      <div className="container box">
        <img src="./icons/like-svgrepo-com.svg"></img>
        <img src="./icons/dislike-svgrepo-com.svg"></img>

        <li>
          <div className="Image">{randomData.image} </div>
          <div className="txt">{randomData.english}</div>
        </li>
        <input
          className="txtSrc"
          ref={textInput}
          placeholder="Type a answer..."
        ></input>
        <br></br>
        <button
          className="btn"
          onClick={(event) => doControl(event, randomData)}
        >
          Let's See
        </button>
      </div>
    </div>
  );
}
export default Main;
