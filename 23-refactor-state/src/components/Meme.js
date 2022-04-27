import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="meme-generator">
      <div className="form">
        <input
          type="text"
          className="form--input one"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input two"
          placeholder="Bottom Text"
        ></input>
        <button type="submit" className="form--btn" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} className="meme--img" alt="" />
      </div>
    </main>
  );
}
