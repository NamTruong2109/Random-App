import React from "react";

function History(props) {
  const {items} = props;

  return items.length > 0 ? <div className="fw-bolder mt-5 d-flex justify-content-center">Lịch sử: <ul>{items.map((item, index) => {
    return <li key={index}>{item.name}: {item.result.join(", ")}</li>
  })}
  </ul>
  </div> : ""
}
export default History;
