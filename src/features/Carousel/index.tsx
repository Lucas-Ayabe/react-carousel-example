import { CSSProperties } from "react";
import "./carousel.styles.css";

export interface Slide {
  image: string;
  caption: string;
}

export interface CarouselProps {
  slides: Slide[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Carousel = ({
  slides,
  currentSlide,
  onNext,
  onPrev,
}: CarouselProps) => {
  const vars = {
    ["--carousel-current-slide"]: currentSlide,
  } as CSSProperties;

  return (
    <article style={vars} className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <figure key={"carousel-slide-" + index} className="carousel-slide">
            <img src={slide.image} alt="" className="carousel-image" />
            <figcaption className="carousel-caption">
              {slide.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <button onClick={onPrev} className="carousel-prev">
        {"<<"}
      </button>
      <button onClick={onNext} className="carousel-next">
        {">>"}
      </button>
    </article>
  );
};
