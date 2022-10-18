import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const headersocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bartosz-mazurowski/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/BrumaMan" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/BartoszMazu" target="_blank"><BsTwitter /></a>
    </div>
  );
};

export default headersocials;
