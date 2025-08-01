import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 4,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-blue-200">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="Break the<b>Chains</b>"
          containerClass="mt-5 !text-text-red-600  text-center"
        />

        <div className="about-subtext text-red-300 drop-shadow-[0_0_5px_#ff00ff]">
          <p>Your story begins here<b> Open world. Real combat. No rules</b> </p>
          <p className="text-red-300  ">
           From fragments to fate—<br /><b>Link the worlds, live the war</b>
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about. .webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
