import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐": "Confused Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = emojiDictionary[event.target.value];

    if (userInput === undefined) {
      userInput = "Sorry! This emoji is not available in our database";
    }
    setUserInput(userInput);
  }
  function emojiClickHandler(emoji) {
    var userInput = emojiDictionary[emoji];
    setUserInput(userInput);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>Enter emoji or Choose any emoji from below to know the meaning</p>
      <input onChange={emojiInputHandler}></input>
      <div className="output"> {userInput} </div>
      <h2> Our emoji list </h2>
      <div className="e-list">
        {emojiList.map(function (emoji) {
          return (
            <span
              id="items"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
