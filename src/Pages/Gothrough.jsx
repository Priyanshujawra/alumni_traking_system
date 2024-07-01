import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { gsap } from "gsap";
import "../css/gothrough.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);

const AirplaneComponent = () => {
  const rendererRef = useRef();
  let object; // Declare object outside the loadModel function

  useEffect(() => {
    const loadModel = () => {
      gsap.set("#line-length", { drawSVG: 0, opacity: 0 });
      gsap.set("#line-wingspan", { drawSVG: 0, opacity: 0 });
      gsap.set("#circle-phalange", { drawSVG: 0, opacity: 0 });

      const onModelLoaded = () => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: 0x171511,
              specular: 0xd0cbc7,
              shininess: 5,
              flatShading: true,
            });
          }
        });
        setupAnimation(object);
      };

      const manager = new THREE.LoadingManager(() => onModelLoaded(object));
      manager.onProgress = (item, loaded, total) =>
        console.log(item, loaded, total);

      const loader = new OBJLoader(manager);
      loader.load(
        "https://assets.codepen.io/557388/1405+Plane_1.obj",
        (obj) => {
          object = obj;
        }
      );
    };

    const setupAnimation = (model) => {
      class Scene {
        constructor(model) {
          this.views = [
            { bottom: 0, height: 1 },
            { bottom: 0, height: 0 },
          ];

          this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
          });

          this.renderer.setSize(window.innerWidth, window.innerHeight);
          this.renderer.shadowMap.enabled = true;
          this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
          this.renderer.setPixelRatio(window.devicePixelRatio);

          rendererRef.current.appendChild(this.renderer.domElement);

          this.scene = new THREE.Scene();

          for (let ii = 0; ii < this.views.length; ++ii) {
            const view = this.views[ii];
            const camera = new THREE.PerspectiveCamera(
              45,
              window.innerWidth / window.innerHeight,
              1,
              2000
            );
            camera.position.fromArray([0, 0, 180]);
            camera.layers.disableAll();
            camera.layers.enable(ii);
            view.camera = camera;
            camera.lookAt(new THREE.Vector3(0, 5, 0));
          }

          this.light = new THREE.PointLight(0xffffff, 0.75);
          this.light.position.z = 150;
          this.light.position.x = 70;
          this.light.position.y = -20;
          this.scene.add(this.light);
          this.softLight = new THREE.AmbientLight(0xffffff, 1.5);
          this.scene.add(this.softLight);
          console.log(this.softLight);

          this.onResize();
          window.addEventListener("resize", this.onResize, false);

          const edges = new THREE.EdgesGeometry(model.children[0].geometry);
          const line = new THREE.LineSegments(edges);
          line.material.depthTest = false;
          line.material.opacity = 0.5;
          line.material.transparent = true;
          line.position.x = 0.5;
          line.position.z = -1;
          line.position.y = 0.2;

          this.modelGroup = new THREE.Group();

          model.layers.set(0);
          line.layers.set(1);

          this.modelGroup.add(model);
          this.modelGroup.add(line);
          this.scene.add(this.modelGroup);
        }

        render = () => {
          for (let ii = 0; ii < this.views.length; ++ii) {
            const view = this.views[ii];
            const camera = view.camera;

            const bottom = Math.floor(this.h * view.bottom);
            const height = Math.floor(this.h * view.height);

            this.renderer.setViewport(0, 0, this.w, this.h);
            this.renderer.setScissor(0, bottom, this.w, height);
            this.renderer.setScissorTest(true);

            camera.aspect = this.w / this.h;
            this.renderer.render(this.scene, camera);
          }
        };

        onResize = () => {
          this.w = window.innerWidth;
          this.h = window.innerHeight;

          for (let ii = 0; ii < this.views.length; ++ii) {
            const view = this.views[ii];
            const camera = view.camera;
            camera.aspect = this.w / this.h;
            const camZ = (screen.width - this.w) / 3;
            camera.position.z = camZ < 180 ? 180 : camZ;
            camera.updateProjectionMatrix();
          }

          this.renderer.setSize(this.w, this.h);
          this.render();
        };
      }

      const scene = new Scene(model);
      const plane = scene.modelGroup;

      gsap.fromTo(
        "canvas",
        { x: "50%", autoAlpha: 0 },
        { duration: 1, x: "0%", autoAlpha: 1 }
      );
      gsap.to(".loading", { autoAlpha: 0 });
      gsap.to(".scroll-cta", { opacity: 1 });
      gsap.set("svg", { autoAlpha: 1 });

      const tau = Math.PI * 2;

      gsap.set(plane.rotation, { y: tau * -0.25 });
      gsap.set(plane.position, { x: 80, y: -32, z: -60 });

      scene.render();

      const sectionDuration = 1;
      gsap.fromTo(
        scene.views[1],
        { height: 1, bottom: 0 },
        {
          height: 0,
          bottom: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".blueprint",
            scrub: true,
            start: "bottom bottom",
            end: "bottom top",
          },
        }
      );

      gsap.fromTo(
        scene.views[1],
        { height: 0, bottom: 0 },
        {
          height: 1,
          bottom: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".blueprint",
            scrub: true,
            start: "top bottom",
            end: "top top",
          },
        }
      );

      gsap.to(".ground", {
        y: "30%",
        scrollTrigger: {
          trigger: ".ground-container",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      gsap.from(".clouds", {
        y: "25%",
        scrollTrigger: {
          trigger: ".ground-container",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      gsap.to("#line-length", {
        opacity: 1,
        drawSVG: 100,
        scrollTrigger: {
          trigger: ".length",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      });

      gsap.to("#line-wingspan", {
        opacity: 1,
        drawSVG: 100,
        scrollTrigger: {
          trigger: ".wingspan",
          scrub: true,
          start: "top 25%",
          end: "bottom 50%",
        },
      });

      gsap.to("#circle-phalange", {
        opacity: 1,
        drawSVG: 100,
        scrollTrigger: {
          trigger: ".phalange",
          scrub: true,
          start: "top 50%",
          end: "bottom 100%",
        },
      });

      gsap.to("#line-length", {
        opacity: 0,
        drawSVG: 0,
        scrollTrigger: {
          trigger: ".length",
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });

      gsap.to("#line-wingspan", {
        opacity: 0,
        drawSVG: 0,
        scrollTrigger: {
          trigger: ".wingspan",
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });

      gsap.to("#circle-phalange", {
        opacity: 0,
        drawSVG: 0,
        scrollTrigger: {
          trigger: ".phalange",
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });

      const tl = gsap.timeline({
        onUpdate: scene.render,
        scrollTrigger: {
          trigger: ".content",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
        defaults: { duration: sectionDuration, ease: "power2.inOut" },
      });

      let delay = 0;

      tl.to(".scroll-cta", { duration: 0.25, opacity: 0 }, delay);
      tl.to(plane.position, { x: -10, ease: "power1.in" }, delay);

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.25, y: 0, z: -tau * 0.05, ease: "power1.inOut" },
        delay
      );
      tl.to(
        plane.position,
        { x: -40, y: 0, z: -60, ease: "power1.inOut" },
        delay
      );

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.25, y: 0, z: tau * 0.05, ease: "power3.inOut" },
        delay
      );
      tl.to(
        plane.position,
        { x: 40, y: 0, z: -60, ease: "power2.inOut" },
        delay
      );

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.2, y: 0, z: -tau * 0.1, ease: "power3.inOut" },
        delay
      );
      tl.to(
        plane.position,
        { x: -40, y: 0, z: -30, ease: "power2.inOut" },
        delay
      );

      delay += sectionDuration;

      tl.to(plane.rotation, { x: 0, z: 0, y: tau * 0.25 }, delay);
      tl.to(plane.position, { x: 0, y: -10, z: 50 }, delay);

      delay += sectionDuration;
      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" },
        delay
      );
      tl.to(plane.position, { z: 30, ease: "power4.inOut" }, delay);

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" },
        delay
      );
      tl.to(plane.position, { z: 60, x: 30, ease: "power4.inOut" }, delay);

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.35, y: tau * 0.75, z: tau * 0.6, ease: "power4.inOut" },
        delay
      );
      tl.to(
        plane.position,
        { z: 100, x: 20, y: 0, ease: "power4.inOut" },
        delay
      );

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        { x: tau * 0.15, y: tau * 0.85, z: -tau * 0, ease: "power1.in" },
        delay
      );
      tl.to(
        plane.position,
        { z: -150, x: 0, y: 0, ease: "power1.inOut" },
        delay
      );

      delay += sectionDuration;

      tl.to(
        plane.rotation,
        {
          duration: sectionDuration,
          x: -tau * 0.05,
          y: tau,
          z: -tau * 0.1,
          ease: "none",
        },
        delay
      );
      tl.to(
        plane.position,
        { duration: sectionDuration, x: 0, y: 30, z: 320, ease: "power1.in" },
        delay
      );

      tl.to(
        scene.light.position,
        { duration: sectionDuration, x: 0, y: 0, z: 0 },
        delay
      );
    };

    loadModel();
  }, []);

  return (
    <div className="Home_of_air">
      <div className="content">
        <div className="loading">Loading</div>
        <div className="trigger"></div>
        <div className="section">
          <h1>A Student to Job with Our Network.</h1>
          <h3>The beginners guide.</h3>
          <p>You've probably forgotten what these are.</p>
          {/* <div className="phonetic">/ ˈɛərˌpleɪn /</div> */}
          <div className="scroll-cta">Scroll</div>
        </div>

        <div className="section right">
          <h2>Know Yourself And Your Ablity</h2>
          <p>What are your interests?</p>
          <p>What are your skills and abilities?</p>
          <p>What values are important to you</p>
        </div>

        <div className="ground-container">
          <div className="parallax ground"></div>
          <div className="section right">
            <h2>..Explore and Choose Options</h2>
            <p>Gain Knowledge and Experience</p>
          </div>

          <div className="section">
            <h2>Put It All Together – The Job Search Process</h2>
            <p>Job Search Strategies</p>
            <p>Advanced Resumes and Cover Letters</p>
            <p>
              Meet with your career advisor to discuss job search strategies
            </p>
          </div>

          <div className="section right">
            <h2>Meet Our Network Alumni's and Expert</h2>
            <p>It's actual Helpful of Your Carear</p>
          </div>
          <div className="parallax clouds"></div>
        </div>

        <div className="blueprint">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <line
              id="line-length"
              x1="10"
              y1="80"
              x2="90"
              y2="80"
              strokeWidth="0.5"
            ></line>
            <path
              id="line-wingspan"
              d="M10 50, L40 35, M60 35 L90 50"
              strokeWidth="0.5"
            ></path>
            <circle
              id="circle-phalange"
              cx="60"
              cy="60"
              r="15"
              fill="transparent"
              strokeWidth="0.5"
            ></circle>
          </svg>
          <div className="section dark">
            <h2>How To Build A Corporate Alumni Network with us</h2>
            <p>
              <a href="https://enterprisealumni.com/blog/how-to-build-an-alumni-network">
                Why Have a Corporate Alumni Network?...
              </a>
            </p>
            <p>
              <a href="https://enterprisealumni.com/blog/how-to-build-an-alumni-network">
                What Makes a Corporate Alumni Network Successful?...
              </a>
            </p>
            <p>
              <a href="https://enterprisealumni.com/blog/how-to-build-an-alumni-network">
                How To Build a Corporate Alumni Network In 7 Steps...
              </a>
            </p>
          </div>
          <div className="section dark length">
            <h2>Join Our Linkdin To Touch Us</h2>
            <a href="https://www.linkedin.com/school/glocal-university---saharanpur-uttar-pradesh/">
              <p>
                <button>Profile</button>
              </p>{" "}
            </a>
          </div>
          <div className="section dark wingspan">
            <h2>Research Career Options</h2>
            <p>
              Explore different career paths that align with your goals &
              interests.
            </p>
          </div>
          <div className="section dark phalange">
            <h2>Gain Experience</h2>
            <p>
              Seek internships, part-time jobs, or volunteer opportunities to
              gain practical experience.
            </p>
          </div>
          <div className="section dark">
            <h2> Interview Preparation </h2>
            <p>
              Practice interview skills & prepare for common interview
              questions.
            </p>
          </div>
          {/* <div className="section"></div> */}
        </div>
        <div className="sunset">
          <div className="section"></div>
          <div className="section end">
            <h2>Always Touch with New Age Technology.</h2>
          </div>
        </div>
        <div ref={rendererRef}></div>
      </div>
    </div>
  );
};

export default AirplaneComponent;
