import React from "react";
import "./Section.scss";

import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/lecture-4.jpg";

import Button from "../Button/Button";

const Section = () => {
    return (
        <section class="section">
        <div class="section__inner">
          <p class="section__helper-text">Learn something new</p>
          <div class="section__header">
            <h2 class="section__title">Open your new possibilities</h2>
            <a href="courses.html" class="button button_outline"
              >More courses</a
            >
          </div>
          <div class="grid">
            <article class="course">
              <a href="#">
                <figure class="course__figure">
                  <img
                    src={LectureImg1}
                    alt="Introduction"
                    class="course__image"
                  />
                </figure>
                <h3 class="course__title">1. Introduction</h3>
                <p class="course__subtitle">60 minutes</p>
              </a>
            </article>
            <article class="course">
              <a href="#">
                <figure class="course__figure">
                  <img
                    src={LectureImg2}
                    alt="HTML & CSS"
                    class="course__image"
                  />
                </figure>
                <h3 class="course__title">2. HTML & CSS</h3>
                <p class="course__subtitle">120+ minutes</p>
              </a>
            </article>
            <article class="course">
              <a href="#">
                <figure class="course__figure">
                  <img
                    src={LectureImg3}
                    alt="Version Control Systems"
                    class="course__image"
                  />
                </figure>
                <h3 class="course__title">3. Version Control Systems</h3>
                <p class="course__subtitle">120+ minutes</p>
              </a>
            </article>
            <article class="course">
              <a href="#">
                <figure class="course__figure">
                  <img
                    src={LectureImg4}
                    alt="Advanced CSS"
                    class="course__image"
                  />
                </figure>
                <h3 class="course__title">4. Advanced CSS</h3>
                <p class="course__subtitle">120+ minutes</p>
              </a>
            </article>
          </div>
        </div>
      </section>

    );
};

export default Section;