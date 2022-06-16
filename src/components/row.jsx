import Pixel from "./pixel";
import './../styles/row.css';

const Row = (props) => {
  const {mouseHeld, width, penColor} = props;

  let row = [];

  for (let i = 0; i < width; i++) {
    row.push( <Pixel mouseHeld={mouseHeld} key={i} penColor={penColor}/> );
  }

  return (
    <div className="row">
      {row}
    </div>
  );
}

export default Row;