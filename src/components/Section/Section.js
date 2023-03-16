import React from "react";
import "./Section.scss";


import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/lecture-4.jpg";
import TestimionialImg from "../../assets/images/testimonial.jpg";

import Button from "../Button/Button";

const Section = () => {
    return (
        <>
        <section className="Section">
        <div className="Section-Inner">
          <p className="Section-HelperText">Learn something new</p>
          <div className="Section-Header">
            <h2 className="Section-Title">Open your new possibilities</h2>
            <Button isOutline={true}>More courses</Button>
          </div>
          <div className="Grid">
            <article className="Course">
              <a href="#">
                <figure className="Course-Figure">
                  <img
                    src={LectureImg1}
                    alt="Introduction"
                    className="Course-Image"
                  />
                </figure>
                <h3 className="Course-Title">1. Introduction</h3>
                <p className="Course-Subtitle">60 minutes</p>
              </a>
            </article>
            <article className="Course">
              <a href="#">
                <figure className="Course-Figure">
                  <img
                    src={LectureImg2}
                    alt="HTML & CSS"
                    className="Course-Image"
                  />
                </figure>
                <h3 className="Course-Title">2. HTML & CSS</h3>
                <p className="Course-Subtitle">120+ minutes</p>
              </a>
            </article>
            <article className="Course">
              <a href="#">
                <figure className="Course-Figure">
                  <img
                    src={LectureImg3}
                    alt="Version Control Systems"
                    className="Course-Image"
                  />
                </figure>
                <h3 className="Course-Title">3. Version Control Systems</h3>
                <p className="Course-Subtitle">120+ minutes</p>
              </a>
            </article>
            <article className="Course">
              <a href="#">
                <figure className="Course-Figure">
                  <img
                    src={LectureImg4}
                    alt="Advanced CSS"
                    className="Course-Image"
                  />
                </figure>
                <h3 className="Course-Title">4. Advanced CSS</h3>
                <p className="Course-Subtitle">120+ minutes</p>
              </a>
            </article>
          </div>
        </div>
        </section>
       
        <section className="Section Section_secondary">

        <div className="Section-Inner">
          <div className="Testimonial">
            <figure className="Testimonial-Figure">
              <img
                src={TestimionialImg}
                alt="Testimonial"
                className="Testimonial-Image"
              />
            </figure>
            <p className="Testimonial-Content">
              <span className="Testimonial-Quotation">"</span> At the academy, I
              learned how to apply technology in practice. Frontend education
              was demanding, it required a lot of time. Upon completion, I got
              my first job as a developer.<span className="Testimonial-Quotation"
                >"</span
              >
            </p>
          </div>
        </div>


      </section> 
      </>
    );
};

export default Section;