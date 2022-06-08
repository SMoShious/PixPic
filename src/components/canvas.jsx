import { useRef } from "react";
import { exportComponentAsPNG } from 'react-component-export-image';
import React from "react";
import Row from "./row";

const Canvas = (props) => {
  const {width, height, penColor} = props;
  
  let columns = [];
  const ref = useRef();
  
  for (let i = 0; i < height; i++) {
    columns.push( <Row key={i} width={width} penColor={penColor}/> );
  }

  
  return (
    <React.Fragment>
      <div className="canvasDiv">
        <div className="canvas" ref={ref}>
          {columns}
        </div>
      </div>
      <div className='canvasBtns'>
        <div className='saveBtn customBtn' onClick={() => exportComponentAsPNG(ref)}>I want a copy of this!</div>
      </div>
    </React.Fragment>
  );
}

export default Canvas;