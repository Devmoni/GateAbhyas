import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundColor:'grey',color: 'black', height:'61px',margin:'10px'}}>
      <div className="footer-content" style={{textAlign:'center', padding:'10px'}}>
        <p>© {currentYear} Gate Abhyaas</p>
      </div>
    </footer>
  );
}

export default Footer;
