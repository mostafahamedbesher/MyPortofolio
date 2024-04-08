function Heading({ headingName }) {
  return (
    <div className="sections-heading">
      <div className="heading-line"></div>
      <h2 className="secondary-heading">{headingName}</h2>
      <div className="heading-line"></div>
    </div>
  );
}

export default Heading;
