import React, { useRef, useState } from "react";
import "./StarRating.css";
import StarFilled from "../../asset/icon/star-filled.svg";
import StarOutline from "../../asset/icon/star-outline.svg";

export interface StarRatingProps {
  onClick?: (value: number) => void;
  display: boolean;
  rating: number;
  numStars: number;
  precision: number;
}

// if this component is being used on the Add Review page, set rating = -1
const StarRating = ({
  onClick,
  display,
  rating,
  numStars,
  precision,
}: StarRatingProps) => {
  const [activeStar, setActiveStar] = useState(rating);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingRef = useRef(document.createElement("div"));

  const roundRating = (e: { clientX: number }) => {
    const { width, left } = ratingRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * numStars;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(
      nearestNumber.toFixed(precision.toString().split(".")[1]?.length || 0)
    );
  };

  const handleClick = (e: { clientX: number }) => {
    setIsHovered(false);
    let newRating = roundRating(e);
    setActiveStar(newRating);
    if (onClick) onClick(newRating);
  };

  const handleMouseMove = (e: { clientX: number }) => {
    setIsHovered(true);
    setHoverActiveStar(roundRating(e));
  };

  const handleMouseLeave = () => {
    setHoverActiveStar(-1);
    setIsHovered(false);
  };

  const displayProps = {
    className: "stars",
    ref: ratingRef,
    onClick: !display ? handleClick : undefined,
    onMouseMove: !display ? handleMouseMove : undefined,
    onMouseLeave: !display ? handleMouseLeave : undefined,
  };

  return (
    <div {...displayProps}>
      {[...new Array(numStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;
        const showEmptyStar = activeState === -1 || activeState < index + 1;

        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;

        return (
          <div className="star" key={index}>
            <div
              style={{
                width: isRatingEqualToIndex
                  ? `${(activeState % 1) * 100}%`
                  : "0%",
                overflow: "hidden",
                position: "absolute",
              }}
            >
              <img src={StarFilled} />
            </div>
            <div>
              {showEmptyStar ? (
                <img src={StarOutline} />
              ) : (
                <img src={StarFilled} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
