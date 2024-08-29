import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "./Slider.scss";
import Jaipur from "../assets/Jaipur.png";
import ganpati from "../assets/ganpati.jpeg";

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container-h", {
      speed: 1500,
      autoplay: {
        delay: 1000,
      },
      parallax: true,
      mousewheel: true,
      loop: true,

      on: {
        init: function () {
          const swiper = this;
          swiper.slides.forEach((slide) => {
            const slideBg = slide.querySelector(".slide-bg");
            if (slideBg) {
              slideBg.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }
          });
        },
        resize: function () {
          this.update();
        },
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            `<span class="${className}">` +
            `<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">` +
            `<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"` +
            `stroke-opacity="1" stroke-width="1px"></circle>` +
            `<circle cx="8" cy="8" r="3" fill="#FFF"></circle>` +
            `</svg></span>`
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper) swiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="creative-showcase--slider">
      <div className="banner-horizental">
        <div className="swiper swiper-container-h">
          <div className="swiper-wrapper">
            {[
              {
                bgImage:
                  "https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg",
                subtitle: "Odisha",
                heading: "Konark Sun Temple",
                link: "",
              },
              {
                bgImage:
                  "https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg",
                subtitle: "Punjab",
                heading: "Golden Temple",
                link: "",
              },
              {
                bgImage:
                  "https://engl23102sp16.wordpress.com/wp-content/uploads/2016/04/indique_dance_company-0440-zf-7459-65227-1-001.jpg?w=2000&h=1499&crop=1",
                subtitle: "Folk Dance",
                heading: "Bharat Natyam",
                link: "",
              },
              {
                bgImage:
                  "https://images.unsplash.com/photo-1715628283682-22da01c0aa5f?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                subtitle: "Jaipur",
                heading: "Painting",
                link: "",
              },
              {
                bgImage:
                  "https://i.pinimg.com/originals/f3/4f/f9/f34ff950b97cbf130a0d74eb4210a0a2.png",
                subtitle: "Maharashtra",
                heading: "Sahyadri Range",
                link: "",
              },
              {
                bgImage: "https://wallpaperaccess.com/full/760289.jpg",
                subtitle: "Agra",
                heading: "Taj Mahal",
                link: "",
              },
              {
                bgImage:
                  "https://s3.ap-southeast-1.amazonaws.com/gounesco.com/wp-content/uploads/2019/09/04212642/nalandauniversity.jpg",
                subtitle: "Literature",
                heading: "Nalanda University",
                link: "",
              },
            ].map((slide, index) => (
              <div className="swiper-slide" key={index}>
                <div
                  className={`slide-bg ${
                    index === 5 ? "overlay-dark" : "overlay-light"
                  }`}
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                  data-swiper-parallax="75"
                >
                  <div className="slide-container">
                    <div className="slide-row">
                      <div className="slider-content">
                        <h6
                          className="slide-subtitle bg-white rounded-lg p-2 font-bold text-black m-2"
                          data-swiper-parallax="-1000"
                        >
                          {slide.subtitle}
                        </h6>
                        <h1
                          className="slide-heading font-Main bg-white rounded-lg p-2 font-bold text-black m-2"
                          data-swiper-parallax="-2000"
                        >
                          <a
                            href={slide.link}
                            dangerouslySetInnerHTML={{ __html: slide.heading }}
                          />
                        </h1>
                      </div>
                    </div>
                  </div>
                  {slide.isVideo && (
                    <div className="video-container">
                      <video autoPlay loop muted>
                        <source src={slide.videoSrc} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
