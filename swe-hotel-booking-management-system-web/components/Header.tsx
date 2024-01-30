
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="HOTEL">HOTEL</div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Facilities">Facilities</Link></li>
          <li><Link href="/Rooms">Rooms</Link></li>
          <li><Link href="/contact-us">Contact-us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
