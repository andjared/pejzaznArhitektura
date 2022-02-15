import ImageGallery from "react-image-gallery";
import { translations } from "../translations";
import { FaAngleDoubleDown } from "react-icons/fa";
import gradation from "../images/gradation.jpg";
import { useRef } from "react";

const Gallery = ({ language, items }) => {
  const conceptRef = useRef(null);
  const handleScrollButton = () => {
    conceptRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // console.log(items);
  return (
    <div className="gallery-page">
      <div className="galleries">
        <div className="gallery">
          <h2>{translations.gallery.first[language]} </h2>
          <ImageGallery items={items.firstGalleryimg} showIndex showBullets />
        </div>
        <div className="gallery">
          <h2>{translations.gallery.second[language]} </h2>
          <ImageGallery items={items.secondGalleryimg} showIndex showBullets />
        </div>
        <div className="gallery">
          <h2>{translations.gallery.third[language]} </h2>
          <ImageGallery items={items.thirdGalleryimg} showIndex showBullets />
        </div>
      </div>
      <div className="concept">
        <button onClick={handleScrollButton}>
          <FaAngleDoubleDown id="downArrow" />
        </button>
        <p>{translations.concept[language]} </p>
        <img id="gradation" src={gradation} alt="" ref={conceptRef} />
      </div>
    </div>
  );
};

export default Gallery;
