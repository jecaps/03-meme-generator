import { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite() {
    setContact((contact.isFavorite = !contact.isFavorite));
  }

  return (
    <main>
      <article className="card">
        <img
          src={require("./images/user.png")}
          className="card--image"
          alt=""
        />

        <div>
          <img
            src={require(`./images/${starIcon}`)}
            className="card--favorite"
            onClick={toggleFavorite}
            alt=""
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
