import React, { useEffect, useState } from "react";
import "./../Styles/App.scss";
import Card from "./../Components/Card";

function App() {
  const url =
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

  const [cards, setCards] = useState(null);

  fetch(url)
    .then((res) => res.json())
    .then((data) => setCards(data))
    .catch((error) => console.log(error));

  if (cards) {
    return (
      <div className="container">
        {cards.map((card, index) => (
          <Card
            id={card.id}
            date={card.date}
            title={card.title}
            content={card.content}
            thumbnail={card.thumbnail}
            author={card.author}
            key={index}
          />
        ))}
      </div>
    );
  }

  return <div className="App"></div>;
}

export default App;
