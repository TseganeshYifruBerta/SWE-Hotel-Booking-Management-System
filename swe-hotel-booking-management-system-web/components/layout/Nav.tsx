import Link from "next/link";
import React from "react"

const NavBar: React.FC = () => {
    return (
      <div className="flex font-semibold justify-end">
        <Link href={"/home"} className="w-1/5">
          Home
        </Link>
        <Link href={"/rooms"} className="w-1/5">
          Rooms
        </Link>
        <Link href={"/contactus"} className="w-1/5">
          ContactUs
        </Link>
      </div>
    );
}
export default NavBar;