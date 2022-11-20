import Carousel from "react-gallery-carousel";
import pic1 from "../../utils/images/product1.jpg";
import pic2 from "../../utils/images/product2.jpg";
import pic3 from "../../utils/images/product3.jpg";
import pic4 from "../../utils/images/product4.jpg";
import pic5 from "../../utils/images/product5.jpg";
import pic6 from "../../utils/images/product6.jpg";
import pic7 from "../../utils/images/product7.jpg";
import pic8 from "../../utils/images/product8.jpg";

import "react-gallery-carousel/dist/index.css";

const PictureCarousel = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
    (img) => ({
      src: img,
    })
  );

  return (
    <Carousel
      images={images}
      style={{ height: "25vw", width: "40vw" }}
      isAutoPlaying
      autoPlayInterval={3500}
      hasMediaButton
      hasIndexBoard={false}
    />
  );
};

export default PictureCarousel;
