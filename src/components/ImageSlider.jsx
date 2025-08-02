import { useEffect, useState } from "react";
import "./ImageSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

const imageData = [
  // Your image data remains the same
];

function ImageSlider() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageData.length - 1);

  // Your useEffect and animation logic remains the same

  return (
    <div className="ImageSlider">
      <div className="version-highlights">
        <p className="text-black text-sm special-font hero-heading">
          Version 2.7
        </p>
      </div>
      
      <div className="ImageSliderContainer">
        {/* Mobile-first structure */}
        <div className="mobile-layout md:hidden">
          {/* Large centered image */}
          <div className="mobile-image-container">
            <img
              src={imageData[midImage].src}
              alt={imageData[midImage].title}
              className="middleImage w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
          
          {/* Text content below image */}
          <div className="image-content mt-4 text-center">
            <p className="font-circular-web text-lg text-black">
              {imageData[midImage].title}
            </p>
            <p className="max-w-md font-circular-web text-sm text-black opacity-50 mx-auto">
              {imageData[midImage].description}
            </p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="Images hidden md:block">
          <img
            src={imageData[rightImage].src}
            alt={imageData[rightImage].title}
            className="rightImage"
          />

          <div className="center-content">
            <img
              src={imageData[midImage].src}
              alt={imageData[midImage].title}
              className="middleImage"
            />
            <div className="image-content">
              <p className="font-circular-web text-lg text-black">
                {imageData[midImage].title}
              </p>
              <p className="max-w-md font-circular-web text-sm text-black opacity-50">
                {imageData[midImage].description}
              </p>
            </div>
          </div>

          <img
            src={imageData[leftImage].src}
            alt={imageData[leftImage].title}
            className="leftImage"
          />
        </div>
      </div>

      {/* Navigation buttons - positioned below text on mobile */}
      <div className="buttons flex justify-center mt-6 md:mt-0">
        <button className="slider-button leftButton mr-4" onClick={handleDecrement}>
          <IoIosArrowBack size={24} />
        </button>
        <button className="slider-button rightButton" onClick={handleIncrement}>
          <IoIosArrowBack size={24} className="transform rotate-180" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="dotsPlace mt-6">
        {imageData.map((_, index) => (
          <div
            key={index}
            className={`dots ${index === midImage ? "active" : "passive"}`}
            onClick={() => {
              setMidImage(index);
              animateSlider(index > midImage ? "right" : "left");
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;