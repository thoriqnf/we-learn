import React from "react";
import "../css/style-materi-detail.css";
import leftArrow from '../detail-pages-again-4/icons/left-arrow.svg'
import rightArrow from '../detail-pages-again-4/icons/right-arrow.svg'

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}