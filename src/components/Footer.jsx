import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/107624205?v=4"}
          alt="Founder"
        />

        <h2>Ahtesham</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@ahteshamvlogs9481" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/p/Cj29GPFIaPdHBIZbfztjBoj3lAgZbcEriRcNCg0/?igshid=YmMyMTA2M2Y=" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ahteshamweb" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/m-ahtesham-arshad-480046250" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
