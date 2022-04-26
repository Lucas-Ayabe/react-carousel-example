import { Carousel } from "./Carousel";
import { useCarousel } from "./Carousel/use-carousel";

function App() {
  const carouselProps = useCarousel([
    {
      image: "http://via.placeholder.com/1200x768",
      caption: "Carousel 01",
    },
    {
      image: "http://via.placeholder.com/1200x768",
      caption: "Carousel 02",
    },
    {
      image: "http://via.placeholder.com/1200x768",
      caption: "Carousel 03",
    },
    {
      image: "http://via.placeholder.com/1200x768",
      caption: "Carousel 04",
    },
    {
      image: "http://via.placeholder.com/1200x768",
      caption: "Carousel 05",
    },
  ]);

  return (
    <main className="container section flow">
      <h1>Carousel Example</h1>
      <Carousel {...carouselProps} />
    </main>
  );
}

export default App;
