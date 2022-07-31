import React from "react";
import FlipNumbers from 'react-flip-numbers';

function Number(props) {
  const {number} = props;
  return <FlipNumbers
      play
      color="#fff"
      background="#333333"
      width={50}
      height={50}
      numbers={`${number}`}
    />
}

export default Number;
