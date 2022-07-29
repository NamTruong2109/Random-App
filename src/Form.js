import React from "react";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

function Form() {
  const [number, setNumber] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (typeof number == "undefined" || typeof min == "undefined" || typeof max == "undefined") {
      alert("Vui long nhap day du input.");
      return;
    }
    if (parseInt(max) < parseInt(min)) {
      alert("Vui long nhap min < max");
      return;
    }
    navigate('/home', {state: {number, min, max}});
  }
  return (
    <div className="mt-5">
      <div className="form-group row mb-2">
        <label htmlFor="number" className="col-sm-2 col-form-label">Nhập số lượng:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="number" id="number" value={number}
                 onChange={e => setNumber(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="min" className="col-sm-2 col-form-label">Min:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="min" id="min" value={min}
                 onChange={e => setMin(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row mb-2">
        <label htmlFor="max" className="col-sm-2 col-form-label">Max:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="max" id="max" value={max}
                 onChange={e => setMax(e.target.value)}/>
        </div>
      </div>
      <div className="form-group row d-flex justify-content-center">
        <button className="btn btn-primary col-2 offset-2" onClick={onSubmit}>Random</button>
      </div>
    </div>
  )
}

export default Form;
