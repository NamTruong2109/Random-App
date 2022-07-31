import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import History from "./History";

function Form() {
  const [quantity, setQuantity] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [name, setName] = useState();
  const [itemsLocalStorage, setItemsLocalStorage] = useState(JSON.parse(localStorage.getItem('items')) || []);

  const navigate = useNavigate();

  const onSubmit = () => {
    if (typeof quantity == "undefined" || typeof min == "undefined" || typeof max == "undefined"|| typeof name == "undefined") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (parseInt(max) < parseInt(min)) {
      alert("Vui lòng nhập số nhỏ nhất nhỏ hơn hoặc bằng số lớn nhất!");
      return;
    }
    navigate('/home', {state: {quantity, min, max, name}});
  }

  const onClickClearHistory = () => {
    localStorage.removeItem("items");
    setItemsLocalStorage([]);
  };

  return (
    <>
      <div className="form-group row mb-2">
        <label htmlFor="name" className="col-sm-2 col-form-label">Tên:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="name" id="name" value={name}
                 onChange={e => setName(e.target.value)}/>
        </div>
      </div><div className="form-group row mb-2">
        <label htmlFor="quantity" className="col-sm-2 col-form-label">Số lượng:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="quantity" id="quantity" value={quantity}
                 onChange={e => setQuantity(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="min" className="col-sm-2 col-form-label">Số nhỏ nhất:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="min" id="min" value={min}
                 onChange={e => setMin(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="max" className="col-sm-2 col-form-label">Số lớn nhất:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="max" id="max" value={max}
                 onChange={e => setMax(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row d-flex justify-content-center">
        <button className="btn btn-primary col-2 offset-2 btn-lg" onClick={onSubmit}>Random</button>
        <button className="col-3 col-lg-2 btn btn-danger mx-2 btn-lg" onClick={onClickClearHistory}>Xoá lịch sử</button>
      </div>
      <History items={itemsLocalStorage}/>
    </>
  )
}

export default Form;
