import { Star } from "lucide-react";
import React from "react";

const Ratings = ({ rating, size = 18 }: { rating: number; size?: number }) => {
  const stars = [];

  for (let i = 1; i < 6; i++) {
    if (i <= Math.ceil(rating)) {
      stars.push(<Star className="fill-primary stroke-0" size={size} />);
    } else {
      stars.push(<Star className="fill-muted/60 stroke-0" size={size} />);
    }
  }

  return (
    <p className="relative flex items-center">
      {stars.map((el, i) => (
        <span key={i}> {el}</span>
      ))}
    </p>
  );
};

export default Ratings;
