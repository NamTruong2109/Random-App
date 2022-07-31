import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import History from "./History";

function Form() {
  const [quantity, setQuantity] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [name, setName] = useState();
  const itemsLocal = JSON.parse(localStorage.getItem('items')) || [];
  const navigate = useNavigate();

  const onSubmit = () => {
    if (typeof quantity == "undefined" || typeof min == "undefined" || typeof max == "undefined"|| typeof name == "undefined") {
      alert("Please complete all information.");
      return;
    }
    if (parseInt(max) < parseInt(min)) {
      alert("Please enter min less than or equal to max");
      return;
    }
    navigate('/home', {state: {quantity, min, max, name}});
  }
  return (
    <div className="mt-5">
      <div className="form-group row mb-2">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="name" id="name" value={name}
                 onChange={e => setName(e.target.value)}/>
        </div>
      </div><div className="form-group row mb-2">
        <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" name="quantity" id="quantity" value={quantity}
                 onChange={e => setQuantity(e.target.value)}/>
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
      <History items={itemsLocal}/>
    </div>
  )
}

export default Form;
