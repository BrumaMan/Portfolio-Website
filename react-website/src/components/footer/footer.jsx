import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/BrumaMan" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bartosz-mazurowski/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/bartoszmazurowski/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/BartoszMazu" target="_blank"><BsTwitter /></a>
      </div>
    </footer>
  );
};

export default footer;
