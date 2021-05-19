import React from 'react';
import heroImg from '../images/hero.svg';
import '../styles/hero.scss';
const Hero = () => {
  return (
    <header className="hero">
      <section className="hero__text">
        <h1 className="hero__heading">
          Web<span>Geliştirici</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>{' '}
        <div className="btn">
          <a href="/#projects" className="cta">
            Projelerim
          </a>
        </div>
      </section>

      <div className="hero__img">
        <img
          src={heroImg}
          alt="A developer illustration who is focused on a project."
        />
      </div>
    </header>
  );
};

export default Hero;
