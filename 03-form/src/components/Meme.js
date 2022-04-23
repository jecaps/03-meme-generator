export default function Meme() {
  return (
    <main className="meme-generator">
      <form className="form">
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
        <button type="submit" className="form--btn">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}
