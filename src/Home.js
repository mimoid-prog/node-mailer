import React, { useRef, useEffect } from "react";
import HeaderForm from "./forms/HeaderForm";
import { ReactComponent as Scene } from "./images/scene.svg";
import "./styles/home.css";
import "./styles/customStyles.css";
import gsap from "gsap";

function Home() {
  const wrapper = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const man = elements.getElementById("man");
    const card1 = elements.getElementById("card-1");
    const card2 = elements.getElementById("card-2");
    const post11 = elements.getElementById("post-1-1");
    const post12 = elements.getElementById("post-1-2");
    const post13 = elements.getElementById("post-1-3");
    const post21 = elements.getElementById("post-2-1");
    const post22 = elements.getElementById("post-2-2");
    const post23 = elements.getElementById("post-2-3");

    gsap.set([content.current, man, card1, card2], { autoAlpha: 0 });
    gsap.set([post11, post12, post13, post21, post22, post23], {
      autoAlpha: 0
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      content.current,
      { y: "-=100" },
      { duration: 1, y: "+=100", autoAlpha: 1 }
    )
      .fromTo(man, { x: "-=100" }, { duration: 1, x: "+=100", autoAlpha: 1 })
      .fromTo(card1, { x: "-=100" }, { duration: 1, x: "+=100", autoAlpha: 1 })
      .fromTo(
        card2,
        { x: "+=100" },
        { duration: 1, x: "-=100", autoAlpha: 1 },
        "-=0.5"
      )
      .fromTo(post11, { y: "+=50" }, { duration: 0.6, y: "-=50", autoAlpha: 1 })
      .fromTo(
        post12,
        { y: "+=50" },
        { duration: 0.6, y: "-=50", autoAlpha: 1 },
        "-=0.3"
      )
      .fromTo(
        post13,
        { y: "+=50" },
        { duration: 0.6, y: "-=50", autoAlpha: 1 },
        "-=0.3"
      )
      .fromTo(post21, { y: "+=50" }, { duration: 0.6, y: "-=50", autoAlpha: 1 })
      .fromTo(
        post22,
        { y: "+=50" },
        { duration: 0.6, y: "-=50", autoAlpha: 1 },
        "-=0.3"
      )
      .fromTo(
        post23,
        { y: "+=50" },
        { duration: 0.6, y: "-=50", autoAlpha: 1 },
        "-=0.3"
      );
  }, []);

  return (
    <div className="container mx-auto text-center p-6 h-screen flex flex-col justify-between lg:flex-row lg:text-left lg:p-0 lg:py-6">
      <div ref={content} className="lg:w-1/2 lg:pr-24">
        <h1 className="text-4xl md:text-6xl font-normal font-black">
          nodemailer
        </h1>
        <div>
          <HeaderForm />
          <div className="mt-4 lg:mt-12">
            <p className="text-purple-700 text-lg:text-lg border-l-4 border-purple-600 py-1 pl-2 bg-purple-100 hidden lg:block">
              narzędzie służące do wysyłki maili z załącznikami
            </p>
          </div>
        </div>
      </div>
      <div
        ref={wrapper}
        className="header-visual lg:w-1/2 lg:pt-10 lg:relative"
      >
        <Scene className="lg:absolute lg:z-10" />
      </div>
    </div>
  );
}

export default Home;
