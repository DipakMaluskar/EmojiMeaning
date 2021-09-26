import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😕": "Confused Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer"
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
