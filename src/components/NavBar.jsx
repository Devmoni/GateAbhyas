import React, { useState } from "react";

function NavBar() {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const openNav = () => {
    setSideNavOpen(true);
  };

  const closeNav = () => {
    setSideNavOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
        <span style={{ fontSize: "30px"}}> Gate Abhyaas</span>
      </div>

      <div className={`sidenav ${isSideNavOpen ? "open" : ""}`} id="mySidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">Log Out</a>
      </div>

    </div>
  );
}

export default NavBar;
