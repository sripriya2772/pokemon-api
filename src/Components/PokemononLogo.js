import React, { useState } from "react";
import Details from "./Details";
  
const PokemonLogo = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  par1,
  par2,
  par3,
  par4,
  par5,
  par6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Type : {type}</small>
        <button className="pokeinfo" 
          onClick={() => setShow(!show)}>
          {show === true ? "Know less..." : "Know more..."}
        </button>
        {show === true ? (
          <Details
            weightpok={weight}
            heightpok={height}
            pokpar1={par1}
            pokpar2={par2}
            pokpar3={par3}
            pokpar4={par4}
            pokpar5={par5}
            pokpar6={par6}
            pokbs1={bs1}
            pokbs2={bs2}
            pokbs3={bs3}
            pokbs4={bs4}
            pokbs5={bs5}
            pokbs6={bs6}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
  
export default PokemonLogo;