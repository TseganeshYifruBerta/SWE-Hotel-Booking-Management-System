import React from "react"
import Image from "next/image";
const RoomCard : React.FC = () => {
    return (
      <div>
        <div className="flex flex-row">
          <div className="w-1/2 flex items-center justify-center">
            <div className="ml-8">
              <h1 className="text-3xl">WELCOME TO</h1>
              <h1 className="text-5xl font-bold">HOTEL</h1>
              <h3>
                Book your stay and enjoy Luxury redefined at the most affordable
                rates.
              </h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={"/images/home.png"} alt={""} width={500} height={500} />
          </div>
        </div>
      </div>
    );
}

export default RoomCard;