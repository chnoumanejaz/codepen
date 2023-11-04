import { BallTriangle } from 'react-loader-spinner';

function Spinner() {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#3fb18b"
      ariaLabel="ball-triangle-loading"
      wrapperStyle=""
      visible={true}
    />
  );
}

export default Spinner;
