import React from 'react';
import { navbarContent } from './NavbarContent';

function Navbar() {
  return (
    <div dangerouslySetInnerHTML={{ __html: navbarContent }} />
  );
}

export default Navbar;
