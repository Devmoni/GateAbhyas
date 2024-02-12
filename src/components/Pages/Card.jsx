import React ,{ useState, useEffect }from "react";
import Navbar from "../NavBar";
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card() {

  const [data, setData] = useState(null);

  useEffect(() => {
      axios.get('/api/data')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }, []);

  const navigate = useNavigate();

  function handleClick(title) {
    navigate("/NextPage", { state: { title } });
  }

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="card" onClick={() => handleClick("Computer Science and Engineering")}>
          <h4>Computer Science and Engineering</h4>
        </div>
        <div className="card" onClick={() => handleClick("Electronics and Communication Engineering")}>
          <h4>Electronics and Communication Engineering</h4>
        </div>
        <div className="card" onClick={() => handleClick("Electrical Engineering")}>
          <h4>Electrical Engineering</h4>
        </div>
        <div className="card" onClick={() => handleClick("Mechanical Engineering")}>
          <h4>Mechanical Engineering</h4>
        </div>
        <div className="card" onClick={() => handleClick("Civil Engineering")}>
          <h4>Civil Engineering</h4>
        </div>
        <div className="card" onClick={() => handleClick("Chemical Engineering")}>
          <h4>Chemical Engineering</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Card;
