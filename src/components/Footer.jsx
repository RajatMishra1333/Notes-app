import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Created By Rajat  {year}</p>
    </footer>
  );
};

export default Footer;