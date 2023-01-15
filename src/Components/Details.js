import React from "react";
  
const Details = ({
  heightpok,
  weightpok,
  pokpar1,
  pokpar2,
  pokpar3,
  pokpar4,
  pokpar5,
  pokpar6,
  pokbs1,
  pokbs2,
  pokbs3,
  pokbs4,
  pokbs5,
  pokbs6,
}) => {
  return (
    <div className="desc">
      <p>
        <b>Height</b> : <b>{heightpok * 10} cm.</b>
      </p>
  
      <p>
        <b>Weight</b> : <b>{weightpok * 0.1} kg</b>
      </p>
  
      <h3>Parameter</h3>
  
      <p>
        <b>
          {pokpar1} : {pokbs1}
        </b>
      </p>
  
      <p>
        <b>
          {pokpar2} : {pokbs2}
        </b>
      </p>
  
      <p>
        <b>
          {pokpar3} : {pokbs3}
        </b>
      </p>
  
      <p>
        <b>
          {pokpar4} : {pokbs4}
        </b>
      </p>
  
      <p>
        <b>
          {pokpar5} : {pokbs5}
        </b>
      </p>
  
      <p>
        <b>
          {pokpar6} : {pokbs6}
        </b>
      </p>
    </div>
  );
};
  
export default Details;