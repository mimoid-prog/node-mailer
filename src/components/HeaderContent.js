import React, { useRef, useEffect } from "react";
import { TimelineLite, Power3 } from "gsap";
import HeaderForm from "./HeaderForm";

const HeaderContent = () => {
  let title = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(title, 1, { y: -100, opacity: 0, ease: Power3.ease }).from(
      content,
      1.5,
      {
        x: -100,
        opacity: 0,
        ease: Power3.easeIn
      },
      0.2
    );
  });

  return (
    <div className="lg:w-1/2 lg:pr-24">
      <h1
        className="text-4xl md:text-6xl font-normal font-black"
        ref={el => (title = el)}
      >
        nodemailer
      </h1>
      <div ref={el => (content = el)}>
        <HeaderForm />
        <div className="mt-4 lg:mt-12">
          <p className="text-purple-700 text-lg:text-lg border-l-4 border-purple-600 py-1 pl-2 bg-purple-100 hidden lg:block">
            narzędzie służące do wysyłki maili z załącznikami
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
