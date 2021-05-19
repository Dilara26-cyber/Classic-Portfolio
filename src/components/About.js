import React from 'react';
import bg from '../images/undraw_Modern_professional_re_3b6l.svg';
import '../styles/about.scss';
const About = () => {
  return (
    <section className="section-center" id="about">
      <div className="bg">
        <img src={bg} alt="Background circle" />
      </div>
      <div className="about__details">
        <h1>Hakkımda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          distinctio deleniti ipsum in, recusandae provident a perspiciatis
          aliquid minus earum inventore facilis molestias natus magnam quas
          nulla minima ex ipsa. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum distinctio deleniti ipsum in, recusandae
          provident a perspiciatis aliquid minus earum inventore facilis
          molestias natus magnam quas nulla minima ex ipsa. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Cum distinctio deleniti ipsum
          in, recusandae provident a perspiciatis aliquid minus earum inventore
          facilis molestias natus magnam quas nulla minima ex ipsa. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cum distinctio deleniti
          ipsum in, recusandae provident a perspiciatis aliquid minus earum
          inventore facilis molestias natus magnam quas nulla minima ex ipsa.
        </p>
      </div>
    </section>
  );
};

export default About;
