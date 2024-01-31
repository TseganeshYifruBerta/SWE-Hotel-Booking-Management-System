import React from "react"
import Image from "next/image";
import Link from "next/link";
export interface RoomCardProps {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: string;
  status: string;
  availableRooms: string;
  createdAt: string;
  updatedAt: string;
}
export interface Props {
  prop: RoomCardProps
}
const RoomCard: React.FC<Props> = ({ prop }) => (
  <div className="flex flex-col w-4/5 ml-10 border-2 border-gray-200">
    <div className="w-full">
      <Image src={"/images/room1.png"} alt={""} width={450} height={450} />
    </div>
    <div className="w-full bg-blue-500 pl-4 p-2">{prop.title}</div>
    <Link href={`/rooms/${prop.id}`}>
      <div className="text-blue-500 underline pl-4 pt-2">See more details</div>{" "}
    </Link>

    <div className="flex justify-end w-full">
      {prop.status === "Available" ? (
        <div className="bg-green-500 p-2 m-2 w-[150px] rounded-md h-[40px] self-center">
          {prop.status}
        </div>
      ) : (
        <div className="bg-red-500 p-2 m-2 w-[150px] rounded-md h-[40px] self-center">
          {"Not Available"}
        </div>
      )}

      {prop.status === "Available" ? (
        <Link
          href={`/user/payment/${prop.id}`}
          className="border-blue-500 border-2 w-2/6 m-4 rounded-md h-[40px] self-center"
        >
          <button className="p-2">Book Now</button>
        </Link>
      ) : (
        <Link
          href={``}
          className="bg-gray-100 border-2 w-2/6 m-4 rounded-md h-[40px] self-center"
        >
          <button className="p-2">! Book Now</button>
        </Link>
      )}
      <div className=" w-3/6 m-4 rounded-md p-2 justify-center">
        <div>
          Price: <span className="font-bold">{prop.price}</span> Birr
        </div>
        <div>
          AvailableRooms:{" "}
          <span className="font-bold"> {prop.availableRooms} </span>
        </div>
      </div>
    </div>
  </div>
);

export default RoomCard;