import Heading from "./Heading";

function About() {
  return (
    <section className="section-about section" id="about">
      <Heading headingName="About" />
      <div className="about-box grid grid--2col">
        <img className="about-img" src="./imgs/about.png" alt="about image" />
        <p className="about-text">
          frontend developer passionate about crafting seamless user
          experiences. With expertise in HTML, CSS, and JavaScript, I specialize
          in React.js framework. I&apos;m passionate about pushing boundaries
          and creating clean, maintainable code that stands the test of time.
          Let&apos;s collaborate and bring your ideas to life with creativity
          and precision. Let&apos;s embark on this journey together and build
          something extraordinary!
        </p>
      </div>
    </section>
  );
}

export default About;
