import './App.css';
import {useLocation} from 'react-router-dom';
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Home() {
  const {state} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.number || !state?.min || !state?.max) {
      navigate('/');
    }
  }, [navigate, state])
  const randomNumberInRange = () => {
    const {min, max} = state;
    return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));
  }
  return state?.number && <ul>{[...Array(parseInt(state?.number))].map((e, i) => {
    return <li key={i}>Số thứ {i + 1}: {randomNumberInRange()}</li>
  })}</ul>
}

export default Home;
