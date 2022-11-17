import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import Cat1 from "../../utils/images/cat1.jpg";
import Cat2 from "../../utils/images/cat2.jpg";
import Cat3 from "../../utils/images/cat3.jpg";

const PictureCarousel = () => {
  const images = [1, 2, 3].map((number) => ({
    src: `../../utils/images/cat${number}.jpg`,
  }));
  return <Carousel images={images} style={{ height: 500, width: 800 }} />;
};

export default PictureCarousel;
