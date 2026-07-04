import React from 'react';
import { footerContent } from './FooterContent';

function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: footerContent }} />
  );
}

export default Footer;
