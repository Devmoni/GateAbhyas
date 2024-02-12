import React from "react";
import NavBar from "../NavBar";
import { useLocation } from 'react-router-dom';

function NextPage() {
  const location = useLocation();
  const title = location.state ? location.state.title : "";

  return (
    <div>
      {/* <NavBar/> */}
      <h2 className="NextPage-Heading">{title}</h2>

      <div className="button-container">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  );
}

export default NextPage;
