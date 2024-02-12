import React, { useState } from "react";

function NavBar() {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const openNav = () => {
    setSideNavOpen(true);
  };

  const closeNav = () => {
    setSideNavOpen(false);
  };

  // const [dropdownOpen, setDropdownOpen] = useState(false);

  //   const toggleDropdown = () => {
  //       setDropdownOpen(!dropdownOpen);
  //   };
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
    
//     <header>
//     <nav className="navbar">
//         <div className="navbar-left">Gate Abhyas</div>
//         <div className="navbar-right">
//             <div className="user-dropdown">
//                 <img
//                     src="/Aditya/Resources/user.png"
//                     alt="User Logo"
//                     className="user-logo"
//                     onClick={toggleDropdown}
//                 />
//                 {dropdownOpen && (
//                     <div className="dropdown-content" id="dropdownContent">
//                         <a href="#">Profile</a>
//                         <a href="#">Logout</a>
//                     </div>
//                 )}
//             </div>
//         </div>
//     </nav>
// </header>
  );
}

export default NavBar;
