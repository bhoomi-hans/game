import { useEffect, useState } from "react";
import "./ImageSlider.css";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";

 
const imageData = [
  {
  src: "/img/1.jpg",
    title: "New Characters",
    description: "Once a shadow. Now a blade.",
  },
  {
    src: "/img/2.jpg",
    title: "New Map Areas To Discover",
    description: "Discover hidden trails and secret paths",
  },
  {
    src: "/img/3.jpg",
    title: "Mythic Unveil",
    description: "Beyond memory. Beyond myth. The next Entity arrives.",
  },
  {
    src: "/img/4.jpg",
    title: "Power Surge Variant",
    description: " New drop. Zero mercy. Equip the echo of chaos.",
  },
  {
    src: "/img/5.jpg",
    title: "Red Thread Of Fate",
    description: "Bound By Echoes. Split By Fate.New Quests Await.",
  },
  {
    src: "/img/6.jpg",
    title: "New Bosses",
    description: "Abyss-born adversaries emerge",
  },
];

function ImageSlider() {
  const [midImage, setMidImage] = useState(0);
  const [rightImage, setRightImage] = useState(1);
  const [leftImage, setLeftImage] = useState(imageData.length - 1);

  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(imageData.length - 1);
      setRightImage(1);
    } else if (midImage === imageData.length - 1) {
      setRightImage(0);
      setLeftImage(midImage - 1);
    } else {
      setRightImage(midImage + 1);
      setLeftImage(midImage - 1);
    }
  }, [midImage]);

  const animateSlider = (direction) => {
    //   middle image
    gsap.fromTo(
      ".middleImage",
      { x: direction === "right" ? -200 : 200, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );

    //   right image
    gsap.fromTo(
      ".rightImage",
      { x: 600, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );

    //   left image
    gsap.fromTo(
      ".leftImage",
      { x: -500, opacity: 0, scale: 0.6 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5 }
    );

    //text content
    gsap.fromTo(
      ".image-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  };

  const handleIncrement = () => {
    setMidImage((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
    animateSlider("right");
  };

  const handleDecrement = () => {
    setMidImage((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
    animateSlider("left");
  };

  return (
        <div className="ImageSlider">
       
      <div className="version-highlights">
        <p className=" text-black fontSize:12px special-font hero-heading ">
          Version 2.7  
        </p>
      </div>
      <div className="ImageSliderContainer">
        <div className="Images">
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

      <div className="buttons">
        <button className="slider-button leftButton" onClick={handleDecrement}>
          <IoIosArrowBack size={24} />
        </button>
        <button className="slider-button rightButton" onClick={handleIncrement}>
          <IoIosArrowBack size={24} />
        </button>
      </div>

      <div className="dotsPlace">
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