import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Comments from './components/Comments';

function App() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !toggle);
  };
  const setToScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', setToScroll);
  }
  return (
    <div className="App">
      <Navbar toggle={toggle} handleToggle={handleToggle} scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Comments />
        <Contact />
      </main>
    </div>
  );
}

export default App;
