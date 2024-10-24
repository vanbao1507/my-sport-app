// Card.tsx
import React from "react";

interface CardData {
  image: string;
  title: string;
  content: string;
}

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.title} className="card-image" />
      <h3 className="card-title">{card.title}</h3>
      <p className="card-content">{card.content}</p>
      <button className="card-button">Xem thêm</button>
    </div>
  );
};

export default Card;
