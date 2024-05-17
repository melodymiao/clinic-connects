import React from 'react';
import "./ImageText.css";

const ImageText = (props) => {
  const { sector, sectordescription, sectorimg } = props;

  return (
    <>
    <div className="imagetext">
        <div className="text-imagetext">
            <h2 className="section-title">{sector}</h2>
            <p className="paragraph-text">{sectordescription}</p>
            
        </div>
        <img className="img-imagetext" src={sectorimg}></img>
    </div>
    </>
  );
}

export default ImageText;