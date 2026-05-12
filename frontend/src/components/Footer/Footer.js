// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <div className = "footer">
//        <h5 className = "text-center">copyright@bela2015</h5>
//     </div>
   
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Bela Clothing Store</h3>
          <p>Elegant women fashion with personality and comfort.</p>
        </div>
        <div className="footer-links">
          <a href="#clothes">Clothes</a>
          <a href="#about">About</a>
          <a href="mailto:yabitekuam@gmail.com">Contact</a>
          <a href="tel:+123456789">Call us</a>
        </div>
      </div>
      <p className="footer-copy">copyright Bela Clothing Store</p>
    </footer>
  );
};

export default Footer;
