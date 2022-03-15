import React from "react";
import "./about.css";
import { FaUniversity } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Student</h5>
              <small>1st Year Computer Science</small>
            </article>
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>Working on first project</small>
            </article>
          </div>

          <p>
            I'm a 1st year undergraduate student of Computer Science at
            Birmingham City University. I'm a curious person always trying to
            learn something new. Skilled in Python, JavaScript and
            problem-solving. In the future I would like to work as a Software
            Engineer, although I haven't fully decided yet. Interested in
            technology, UI design and programming.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
