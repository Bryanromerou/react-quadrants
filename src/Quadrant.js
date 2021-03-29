import React from 'react';

const Quadrant = (props) => {
  console.log(props.image)
  return (
    <section className="section">
      <img src={props.image} alt=""/>
    </section>
  );
}

export default Quadrant;
