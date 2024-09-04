import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FiDownload } from "react-icons/fi";



export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Practice Work
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>

                <h2 className="mb-1x">Tech Stack</h2>


                <Marquee direction="right" speed={100} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', gap: '20', alignItems: 'center' }} gradient='15' gradientWidth={30} gradientColor="var(--primary-color)">
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" style={{ height: 90, width: 95 }} alt="HTML"></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="CSS" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="JS" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/1260/1260667.png" alt="React" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="java" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/15466/15466163.png" alt="git" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="github" ></img>
                  <img className="stackimg" src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png" alt="mysql" ></img>
                  <img className="stackimg" src="https://hygraph.com/icons/icon-512x512.png" alt="hygraph" ></img>
                  <img className="stackimg" src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="firebase" ></img>
                </Marquee>
                <div className="button_h" style={{marginTop:20 }}>
                  <a className="ac_btn btn" target="blank" href="https://drive.google.com/file/d/11uUAJeL6W6emQihwZmG7k0yKEzebKqpL/view?usp=sharing" style={{ textDecoration: 'none' ,display:'flex' ,gap:5,width:'fit-content'}} download ><FiDownload style={{ fontSize: 20 }} />Downlode Resume</a>
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
