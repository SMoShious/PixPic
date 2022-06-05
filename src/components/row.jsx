import Pixel from "./pixel";
import './../styles/row.css';

const Row = (props) => {
  const {width, penColor} = props;

  let row = [];

  for (let i = 0; i < width; i++) {
    row.push( <Pixel key={i} penColor={penColor}/> );
  }

  return (
    <div className="row">
      {row}
    </div>
  );
}

export default Row;