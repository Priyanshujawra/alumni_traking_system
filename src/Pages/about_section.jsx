import React, { useEffect } from "react";
import "../css/normalize.css";
import "../css/style.css";
import Splitting from "splitting";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import luxy from "luxy.js"; // Correct import for luxy.js
// import luxy from  "../js/luxy.js"
import Footer from "../components/Footer";
function AboutSection() {
  useEffect(() => {
    // Debug: Log when the useEffect hook is triggered
    console.log("AboutSection component useEffect hook triggered");

    // Initialize luxy.js
    // luxy.init({
    //   wrapper: "#luxy",
    //   targets: ".luxy-el",
    // });

    // Initialize Splitting.js
    Splitting();

    // Register ScrollTrigger plugin from gsap
    gsap.registerPlugin(ScrollTrigger);

    // Define a timeline for animations
    const gTl = gsap.timeline();
    gTl.from(".title.char", 1, {
      opacity: 0,
      yPercent: 130,
      stagger: 0.06,
      ease: "back.out",
    });
    gTl.to(
      ".header__img",
      2,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "expo.out",
      },
      "-=1"
    );
    gTl.from(".header__marq", 2, { yPercent: 100, ease: "expo.out" }, "-=1.5");

    // Debug: Log when header function is called
    console.log("Header function called");

    // Header animations
    function header() {
      gsap.to(".title_paralax", {
        scrollTrigger: {
          trigger: ".header",
          start: "top ",
          scrub: 1.9,
        },
        yPercent: -150,
      });
      gsap.to(".header.stroke", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          scrub: 1.9,
        },
        xPercent: 50,
      });
      gsap.to(".header__img", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          scrub: 1.9,
        },
        xPercent: -70,
      });
      gsap.to(".header__img img", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          scrub: 1.9,
        },
        scale: 1.3,
      });
      gsap.to(".header__marq-wrapp", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          scrub: 1.9,
        },
        xPercent: -50,
      });
      gsap.to(".header__marq-star img", {
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          scrub: 1.9,
        },
        rotate: -720,
      });
    }
    header();

    // Debug: Log when about function is called
    // console.log("About function called");

    // // About animations
    // function about() {
    //   gsap.from(".about__img", {
    //     scrollTrigger: {
    //       trigger: ".about",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //     yPercent: 80,
    //   });
    //   gsap.from(".about__img img", {
    //     scrollTrigger: {
    //       trigger: ".about",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //     scale: 1.6,
    //   });
    //   gsap.to(".about__txt", {
    //     scrollTrigger: {
    //       trigger: ".about__wrapp",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //     yPercent: 50,
    //   });
    // }
    // about();

    // // Debug: Log when benefits function is called
    // console.log("Benefits function called");

    // // Benefits animations
    // function benefits() {
    //   gsap.from(".benefits__num", {
    //     x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    //     scrollTrigger: {
    //       trigger: ".benefits__list",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //   });
    // }
    // benefits();

    // // Debug: Log when portfolio function is called
    // console.log("Portfolio function called");

    // // Portfolio animations
    // function portfolio() {
    //   gsap.from(".work__item,.work__item-num", {
    //     y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    //     scrollTrigger: {
    //       trigger: ".work",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //   });
    //   gsap.from(".work__item-img img", {
    //     scale: 1.6,
    //     scrollTrigger: {
    //       trigger: ".work__wrapp",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //   });
    // }
    // portfolio();

    // // Debug: Log when serv function is called
    // console.log("Serv function called");

    // // Serv animations
    // function serv() {
    //   gsap.from(".serv__item-arrow", {
    //     x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    //     scrollTrigger: {
    //       trigger: ".serv__list",
    //       start: "top bottom",
    //       scrub: 1.9,
    //     },
    //   });
    // }
    // serv();

    // // Debug: Log when footer function is called
    // console.log("Footer function called");

    // Footer animations
    function footer() {
      gsap.from(".footer__div span", {
        y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
        opacity: 0,
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.9,
        },
      });
    }
    footer();
  }, []);

  // Render JSX
  return (
    <div id="luxy" className="wrapp bg-black text-white">
      {/* <!-- rest of your code --> */}
      <>
        <header className="header">
          <h1 className="title" data-splitting="">
            <div className="title_paralax">About Page</div>
            <div className="stroke">on Alumni</div>
          </h1>
          <div className="header__img">
            <img src="img/1.jpg" alt={1} />
          </div>
          <div className="header__marq">
            <div className="header__marq-wrapp">
              <span className="header__marq-txt">
                discuss your ideas
                <span className="header__marq-star">
                  <img src="img/star.svg" alt="" />
                </span>
              </span>
              <span className="header__marq-txt">
                Extraordinary Professor
                <span className="header__marq-star">
                  <img src="img/star.svg" alt="" />
                </span>
              </span>
              <span className="header__marq-txt">
                Top Fauclty
                <span className="header__marq-star">
                  <img src="img/star.svg" alt="" />
                </span>
              </span>
              <span className="header__marq-txt">
                Best Infrastruture To Learn
                <span className="header__marq-star">
                  <img src="./img/star.svg" alt="" />
                </span>
              </span>
            </div>
          </div>
        </header>
        <main className="main">
          {/* div .about */}
          <section className="about">
            <div className="about__wrapp">
              <div className="about__img">
                <img
                  src="https://glocaluniversityindia.files.wordpress.com/2016/12/glocal-student-services.png?w=500"
                  alt={2}
                />
              </div>
              <div className="about__txt">
                <h2 className="section-title">
                  abo<span className="stroke">ut</span>
                  <span className="section-title__square" />
                </h2>
                <p className="about__p">
                  Glocal University is a private and coeducational institution
                  located in Saharanpur, Uttar Pradesh, India. It is situated in
                  the foothills of Shivalik mountains. The university is a
                  non-profit university established by the Uttar Pradesh Private
                  Universities Act, 2011, (U.P. Act no. 2 of 2012) and is
                  recognized by University Grant Commission
                </p>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-white">Motto</span>
                  <span className="ml-auto text-green-300">
                    {" "}
                    Global canvass, local colours[1] Shaping global minds
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-white">Established</span>
                  <span className="ml-auto text-white">2012</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-white">Vice-Chancellor</span>
                  <span className="ml-auto text-white">P.K. bharthi</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-white">Location</span>
                  <span className="ml-auto text-white">
                    <a href="https://geohack.toolforge.org/geohack.php?pagename=Glocal_University&params=30.2583_N_77.6224_E_type:edu">
                      Saharanpur, Uttar Pradesh, India 30.2583°N 77.6224°E
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* div .benefits */}
          <section className="benefits">
            <div className="content">
              <h2 className="section-title">
                benef<span className="stroke">its</span>
                <span className="section-title__square" />
              </h2>
              <ul className="benefits__list">
                <li className="benefits__item">
                  <span className="benefits__num" data-speed={-200}>
                    /01
                  </span>
                  <h3 className=" text-green-300"> Why Choose Us</h3>
                  <p className="benefits__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="benefits__item">
                  <span className="benefits__num" data-speed={-400}>
                    /02
                  </span>
                  <h3 className=" text-green-300">Our Vission</h3>
                  <p className="benefits__txt">
                    /Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="benefits__item">
                  <span className="benefits__num" data-speed={-600}>
                    /03
                  </span>
                  <h3 className=" text-green-300">Our Misssion</h3>
                  <p className="benefits__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section class="text-gray-600 body-font max-w-[1200px] m-auto">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="img/About_images/FOr-Home.png"
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-300">
                  Dr P.K Bharthi Sir
                </h1>
                <p class="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div class="flex justify-center"></div>
              </div>
            </div>
          </section>
          {/* div .portfolio */}
          <section className="work">
            <div className="content">
              <h2 className="section-title">
                porfes<span className="stroke">sor</span>
                <span className="section-title__square" />
              </h2>
              <div className="work__wrapp">
                <div className="work__item">
                  <span className="work__item-num" data-speed={-200}>
                    01
                  </span>
                  <div className="work__item-img">
                    <img
                      src="img/About_images/GURU-New-logo.png"
                      alt="work item"
                    />
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Name</span>
                    <span className="ml-auto text-white">
                      PROF. (DR.) JOHN FINBE
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Position</span>
                    <span className="ml-auto text-white">
                      PRO VICE CHANCELLOR - AYUSH
                    </span>
                  </div>
                </div>
                <div className="work__item">
                  <span className="work__item-num" data-speed={-200}>
                    02
                  </span>
                  <div className="work__item-img">
                    <img src="img/About_images/r.png" alt="work item" />
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Name</span>
                    <span className="ml-auto text-white">
                      PROF. (DR) P K MISHRA
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Position</span>
                    <span className="ml-auto text-white">
                      PRO VICE-CHANCELLOR
                    </span>
                  </div>
                </div>
                <div className="work__item">
                  <span className="work__item-num" data-speed={-200}>
                    03
                  </span>
                  <div className="work__item-img">
                    <img src="img/About_images/sk.png" alt="work item" />
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Name</span>
                    <span className="ml-auto text-white">
                      PROF. (DR) S K SHARMA
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Position</span>
                    <span className="ml-auto text-white">
                      PRO VICE-CHANCELLOR
                    </span>
                  </div>
                </div>
                <div className="work__item">
                  <span className="work__item-num" data-speed={-200}>
                    04
                  </span>
                  <div className="work__item-img">
                    <img src="img/About_images/s.jpg" alt="work item" />
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Name</span>
                    <span className="ml-auto text-white">
                      PROF. (DR) S.P. PANDEY
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-white">Position</span>
                    <span className="ml-auto text-white">REGISTRAR</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* div .serv */}
          <section className="serv">
            <div className="content">
              <h2 className="section-title">
                serv<span className="stroke">ices</span>
                <span className="section-title__square" />
              </h2>
              <ul className="serv__list">
                <li className="serv__item">
                  <p className="serv__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="serv__item-arrow" data-speed={-200}>
                    →
                  </span>
                </li>
                <li className="serv__item">
                  <p className="serv__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="serv__item-arrow" data-speed={-400}>
                    →
                  </span>
                </li>
                <li className="serv__item">
                  <p className="serv__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="serv__item-arrow" data-speed={-600}>
                    →
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </>
    </div>
  );
}

export default AboutSection;
