import { useRef } from "react";
import { exportComponentAsPNG } from 'react-component-export-image';
import React from "react";
import Row from "./row";

const Canvas = (props) => {
  const {setMouseHeld, mouseHeld, width, height, penColor} = props;

  //temp
  function handleMouseDown () {
    setMouseHeld(true);
  }
  
  function handleMouseUp () {
    setMouseHeld(false);
  }
  
  let columns = [];
  const ref = useRef();
  
  for (let i = 0; i < height; i++) {
    columns.push( <Row mouseHeld={mouseHeld} key={i} width={width} penColor={penColor}/> );
  }

  
  return (
    <React.Fragment>
      <div className="canvasDiv">
        <div className="canvasSection">
          <div
            className="canvas"
            ref={ref}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >

            {columns}

          </div>
        </div>
      </div>
      <div className='canvasBtns'>
        <div
          className='saveBtn customBtn'
          onClick={() => exportComponentAsPNG(ref)}>
          I want a copy of this!
        </div>
      </div>
    </React.Fragment>
  );
}

export default Canvas;