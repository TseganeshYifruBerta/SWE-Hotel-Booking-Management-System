import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="HOTEL">HOTEL</div>
      <nav>
        <div className="flex justify-end">
          <div className="justify-end flex w-4/6">
            <div className="w-1/6">
              <Link href="/" className="">
                Home
              </Link>
            </div>
            <div className="w-1/6">
              <Link href="/Facilities" className="">
                Facilities
              </Link>
            </div>
            <div className="w-1/6">
              <Link href="/Rooms" className="">
                Rooms
              </Link>
            </div>
            <div className="w-1/6">
              <Link href="/contact-us">Contact-us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
