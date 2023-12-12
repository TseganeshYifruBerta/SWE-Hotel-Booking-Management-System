import React from "react"
import Image from "next/image";

const RoomCard : React.FC = () => {
    return (
        <div className="flex flex-col w-1/3 mr-4 border-2 border-gray-200">
          <div className="w-full">
            <Image
              src={"/images/room1.png"}
              alt={""}
              width={450}
              height={450}
            />
          </div>
          <div className="w-full bg-blue-500">room type</div>
          <div className="flex justify-end w-full">
            <button className="bg-blue-500 w-1/6 m-4 rounded-md">Price</button>
          </div>
        </div>
    );
}

export default RoomCard;