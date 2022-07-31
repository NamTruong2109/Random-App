import React, {useState, useEffect} from "react";
import {useLocation, useNavigate, Link} from 'react-router-dom';
import Number from "./Number";
import History from "./History";

function Home() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [itemsLocalStorage, setItemsLocalStorage] = useState([]);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));
  }

  const generateNumbers = () => {
    if(state){
      const {quantity, min, max, name = ""} = state;
      const result = [];
      for (let i = 1; i <= quantity; i++) {
        result.push(randomNumberInRange(min, max));
      }
      const itemsLocal = JSON.parse(localStorage.getItem('items')) || [];
      const items = [...itemsLocal, {name, result}];
      setItemsLocalStorage(items);
      localStorage.setItem('items', JSON.stringify(items));
      return result;
    }else{
      navigate('/', {replace: true});
    }
  };

  const onClickRetry = () => {
    setNumbers(generateNumbers());
  }

  const onClickClearHistory = () => {
    localStorage.removeItem("items");
    setItemsLocalStorage([]);
  };

  useEffect(() => {
    setNumbers(generateNumbers);
  }, [])

  return <div className="row">
    {numbers && numbers.map((number, index) => {
      return <div className="col-auto mt-5 mb-2" key={index}><Number number={number} key={number}/></div>
    })}
    <div className="row">
      <Link className="col-3 btn btn-warning" to="/">Back</Link>
      <button className="col-3 btn btn-primary mx-2" onClick={onClickRetry}>Retry</button>
      <button className="col-3 btn btn-danger" onClick={onClickClearHistory}>Clear history</button>
    </div>
    <History items={itemsLocalStorage}/>
  </div>;
}

export default Home;
