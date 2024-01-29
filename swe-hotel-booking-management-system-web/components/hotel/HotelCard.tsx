import React from "react"
import Image from "next/image";

interface Hotel {
    hotelname : string;
    hoteldiscription : string;
    hotelpicture: string;

}
const HotelCard: React.FC<Hotel> = ({hotelname, hoteldiscription, hotelpicture}) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-row p-6 m-4 items-center justify-center ">
          <div className="w-1/2 border-l-2 border-black p-8">
            <h1 className="font-extrabold text-5xl mb-6">{hotelname}</h1>
            <p className="text-xl pb-4">{hoteldiscription}</p>
            <button className="bg-blue-500 rounded-md px-4 py-2 font-bold text-white">
              EXPLORE
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={`/images/${hotelpicture}`}
              alt={""}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    );
}

export default HotelCard;