import "animate.css";

function Hero() {
  return (
    <section className="section-hero" id="home">
      <div className="hero-container grid grid--2col grid-center">
        <h1 className="main-heading animate__animated animate__bounceInDown animate__delay-500ms">
          Hi,
          <br />
          I&apos;m <span>Mostafa Besher</span>,
          <br />
          Frontend Developer
        </h1>

        <img
          className="hero-img animate__animated animate__bounceInDown animate__delay-500ms"
          src="./imgs/hero.png"
        />
      </div>
    </section>
  );
}

export default Hero;
