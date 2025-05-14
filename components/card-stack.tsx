"use client";

import { useState } from "react";
import Card from "@/components/card";
import { EventCard } from "@/lib/data";
import NoMoreCards from "@/components/no-more-cards";

interface CardStackProps {
  initialCards: EventCard[];
}

export default function CardStack({ initialCards }: CardStackProps) {
  const [cards, setCards] = useState<EventCard[]>(initialCards);

  const handleSwipe = (direction: "left" | "right") => {
    setCards((prevCards) => prevCards.slice(1));
  };

  return (
    <div className="relative h-[calc(100vh-12rem)] w-full max-w-sm mx-auto mt-8">
      {cards.length > 0 ? (
        cards.slice(0, 3).map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            totalCards={Math.min(cards.length, 3)}
            isTop={index === 0}
            swipe={handleSwipe}
          />
        ))
      ) : (
        <NoMoreCards />
      )}
    </div>
  );
}