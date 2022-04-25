import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  let getMemeImage = () => {
    const memeImagesArray = memesData.data.memes.map((meme) => meme.url);
    const randomMemeImage =
      memeImagesArray[Math.floor(Math.random() * memeImagesArray.length)];
    setMemeImage(randomMemeImage);
  };

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
        <img src={memeImage} className="meme--img" alt="" />
      </div>
    </main>
  );
}
