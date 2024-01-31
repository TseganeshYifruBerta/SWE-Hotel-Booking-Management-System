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
  <div className="flex flex-col w-2/3 ml-10 border-2 border-gray-200">
    <div className="w-full">
      <Image src={"/images/room1.png"} alt={""} width={450} height={450} />
    </div>
    <div className="w-full bg-blue-500 pl-4 p-2">{prop.title}</div>
    <Link href={`/rooms/${prop.id}`}>
      <div className="text-blue-500 underline pl-4 pt-2">See more details</div>{" "}
    </Link>
    <div className="flex justify-end w-full">
      <button className="bg-blue-500 w-2/6 m-4 rounded-md p-2 ">
        Price: {prop.price} Birr
      </button>
      <button className="bg-green-500 w-1/6 m-4 rounded-md">Book</button>
    </div>
  </div>
);

export default RoomCard;