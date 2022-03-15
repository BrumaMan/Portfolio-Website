import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../images/Me.png";
import HeaderSocials from "./headersocials";

const header = () => {
  return (
    <header>
      <div className="container header__conatiner">
        <h5>Hello I'm</h5>
        <h1>Bartosz Mazurowski</h1>
        <h5 className="text-light"> University Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
