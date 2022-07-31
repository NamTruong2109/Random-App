import React from "react";

function History(props) {
  const {items} = props;

  return <div className="fw-bolder mt-5">History: <ul>{items.map((item, index) => {
    return <li key={index}>{item.name}: {item.result.join(", ")}</li>
  })}
  </ul>
  </div>
}
export default History;
