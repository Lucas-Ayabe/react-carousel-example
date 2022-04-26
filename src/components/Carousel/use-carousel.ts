import { useReducer } from "react";
import { CarouselProps, Slide } from ".";

type CarouselReducerState = { current: number; total: number };
type CarouselAction = {
  type: "PREVIOUS_SLIDE" | "NEXT_SLIDE";
};

const carouselReducer = (
  state: CarouselReducerState,
  action: CarouselAction
): CarouselReducerState => {
  const { current, total } = state;
  switch (action.type) {
    case "PREVIOUS_SLIDE":
      return {
        ...state,
        current: current === 1 ? total : current - 1,
      };
    case "NEXT_SLIDE":
      return {
        ...state,
        current: current === total ? 1 : current + 1,
      };
    default:
      return state;
  }
};

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
