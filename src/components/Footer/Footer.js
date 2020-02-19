import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer className="footer">
    &copy; Prime Digital Academy
    <div id="edamam-badge" data-color="white"></div>
  </footer>
);

export default Footer;
