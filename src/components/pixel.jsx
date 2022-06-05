import { useState } from 'react';
import './../styles/pixel.css';

const Pixel = ( props ) => {

  const {penColor} = props;

  const [newColor, setNewColor] = useState('#ffffff');
  const [oldColor, setOldColor] = useState(newColor);
  const [allowColorChange, setAllowColorChange] = useState(true);

  const colorChangeOnClick = () => {
    setNewColor(penColor);
    setAllowColorChange(false);
  }

  const colorChangeOnEnter = () => {
    setOldColor(newColor);
    setNewColor(penColor);
  }

  const colorChangeOnLeave = () => {
    if (allowColorChange) {
      setNewColor(oldColor);
    }

    setAllowColorChange(true);
  }

  return (
    <div
      className = 'pixel'
      onMouseEnter = {colorChangeOnEnter}
      onMouseLeave = {colorChangeOnLeave}
      onClick = {colorChangeOnClick}
      style = {{backgroundColor: newColor}}
    ></div>
    )
}

export default Pixel;
