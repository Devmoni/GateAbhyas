import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Gate Abhyaas</p>
      </div>
    </footer>
  );
}

export default Footer;
