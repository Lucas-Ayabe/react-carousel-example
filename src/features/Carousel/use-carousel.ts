import { useReducer } from "react";
import { CarouselProps, Slide } from "./index";
import { carouselReducer } from "./carousel.reducer";

export const useCarousel = (slides: Slide[]): CarouselProps => {
  const [currentSlide, dispatch] = useReducer(carouselReducer, {
    current: 1,
    total: slides.length,
  });

  return {
    slides,
    currentSlide: currentSlide.current,
    onNext: () => dispatch({ type: "NEXT_SLIDE" }),
    onPrev: () => dispatch({ type: "PREVIOUS_SLIDE" }),
  };
};
