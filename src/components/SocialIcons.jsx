function SocialIcons({ iconSize }) {
  return (
    <div className="social-icons">
      <a
        className="social-link"
        target="_blanc"
        href="https://github.com/mostafahamedbesher"
      >
        <img
          // className={`social-icon-${iconSize}`}
          className={`social-icon-${iconSize}`}
          src="./imgs/github.png"
          alt="github icon"
        />
      </a>

      <a
        className="social-link"
        target="_blanc"
        href="https://www.linkedin.com/in/mostafa-besher-092297294"
      >
        <img
          // className={`social-icon-${iconSize}`}
          className={`social-icon-${iconSize}`}
          src="./imgs/linkedin.png"
          alt="linkedin icon"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
