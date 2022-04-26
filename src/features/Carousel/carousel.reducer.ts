export interface CarouselReducerState {
  current: number;
  total: number;
}

export interface CarouselAction {
  type: "PREVIOUS_SLIDE" | "NEXT_SLIDE";
}

export const carouselReducer = (
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
