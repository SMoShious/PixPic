import Canvas from './canvas';
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import './../styles/editor.css';

const Editor = () => {
  const [penColor, setPenColor] = useState('#d9ae98');
  const [canvasHeight, setCanvasHeight] = useState(16);
  const [canvasWidth, setCanvasWidth] = useState(16);
  const [showOptions, setShowOptions] = useState(true);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isValidHW, setIsValidHW] = useState(true);

  function startApp () {
    setShowCanvas(!showCanvas);
    setShowOptions(!showOptions);
  }

  function canvasInputTextUpdater (number) {
    document.getElementById('canvasWidthInput').value = number;
    document.getElementById('canvasHeightInput').value = number;
  }

  function changeColor (color) {
    setPenColor(color.hex);
  }

  function exceptionHandler (num, decider) {
    if (decider === 'Width') {
      setCanvasWidth(num.target.value)
    } else if (decider === 'Height') {
      setCanvasHeight(num.target.value)
    }

    if (num.target.value < 1 && num.target.value !== '') {
      if (isValidHW === true)
        alert(`Enter a Valid Positive Value as ${decider}!\nStart Button will disappear!`);
      else
        alert(`Enter a Valid Positive Value as ${decider}!\nSo the Start Button reappears!`);
      setIsValidHW(false);

    } else if (num.target.value >= 1 && canvasHeight >= 0 && canvasWidth >= 0) {
      setIsValidHW(true);
    }
  }

  return (
    <React.Fragment>
      <div id='editor'>
        <h1 className='title'>PixPic</h1>

        {showOptions &&
        <React.Fragment>
          <div className='options'>
            <h2 className='dimensionText'>Enter Project Dimension</h2>
            <h3 className='sizeRecommend'>(more than 64×64 is not recommanded)</h3>

            <div className='sizeText'>
              <div>
                <span id='width'>Width:</span>
              </div>
              <div>
                <input
                  id='canvasWidthInput'
                  type='number'
                  className='canvasNumberSize'
                  defaultValue={canvasWidth}
                  onChange={ (n) => exceptionHandler(n, 'Width') }
                />
              </div>

              <div>
                <span id='height'>Height:</span>
              </div>
              <div>
                <input
                  id='canvasHeightInput'
                  type='number'
                  className='canvasNumberSize'
                  defaultValue={canvasHeight}
                  onChange={ (n) => {exceptionHandler(n, 'Height')} }
                />
              </div>
            </div>

            <h3>or</h3>

            <h2 className='presetsText'>Choose one Below</h2>
            <div className='presets'>

              <div
                className='presetBtn customBtn' 
                onClick={() => {
                  setCanvasHeight(16);
                  setCanvasWidth(16);
                  canvasInputTextUpdater(16);
                  setIsValidHW(true);
                }}>
                  16×16
              </div>
              <div
                className='presetBtn customBtn' 
                onClick={() => {
                  setCanvasHeight(32);
                  setCanvasWidth(32);
                  canvasInputTextUpdater(32);
                  setIsValidHW(true);
                }}>
                  32×32
              </div>
              <div
                className='presetBtn customBtn' 
                onClick={() => {
                  setCanvasHeight(64);
                  setCanvasWidth(64);
                  canvasInputTextUpdater(64);
                  setIsValidHW(true);
                }}>
                  64×64
              </div>
            </div>

          </div>

          {isValidHW &&
            <div className='startBtnDiv'>
              <div className='primaryBtn customBtn' onClick={startApp}>Start</div>
            </div>
          }
        </React.Fragment>
        }

        {showCanvas &&
          <div className='colorpicker'>
            <CirclePicker
              triangle='hide'
              color={penColor}

              //Color Palette + White Color as Eraser
              colors={[
                '#e94030', '#de1a60', '#952bb0', '#653eb7', '#4353b5', '#4098f3',
                '#3eabf4', '#43bdd5', '#339689', '#5dae51', '#92c24b', '#cedb39',
                '#fcea39', '#f9bf00', '#f69600', '#f35516', '#765547', '#ffffff']}
                
                onChangeComplete={changeColor}
                />
          </div>
        }
        {showCanvas &&
          <React.Fragment>
            <Canvas          
              width={canvasWidth}
              height={canvasHeight}
              penColor={penColor}
            />
            <div className='canvasBtns'>
              <div className='primaryBtn customBtn redrawBtn' onClick={startApp}>Redraw</div>
            </div>
          </React.Fragment>
        }
      </div>
    </React.Fragment>
  )
}

export default Editor;