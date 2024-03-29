import TestimonalsCard from "@/components/home/TestimonalsCard";
import RoomCard, { RoomCardProps } from "@/components/room/RoomCard";
import RoomIntro from "@/components/room/RoomIntro";
import { useGetAllRoomsQuery } from "@/store/rooms/get-all-rooms";
import Link from "next/link";
import { useEffect } from "react";

function Rooms() {
  const {
    data: allrooms,
    isLoading,
    isError,
  } = useGetAllRoomsQuery({ userId: "" });
  if (isLoading) {
    return <div>Loading</div>;
  }
 

  console.log(allrooms);
  const pairs = [];
  for (let i = 0; i < allrooms.length; i += 2) {
    if (i + 1 < allrooms.length) {
      pairs.push([allrooms[i], allrooms[i + 1]]);
    } else {
      pairs.push([allrooms[i]]);
    }
  }
  // console.log(allrooms);
  console.log(pairs, "jjjjjjjjjjjjj")
  console.log(allrooms, "ttttttttttttttttttttttttttt")
  return (
    <div>
      <header>
        <div className="text-blue-500 text-5xl p-4 font-bold">HMS</div>
        <nav>
          <div className="flex justify-end">
            <div className="justify-end flex w-4/6">
              <div className="w-1/6">
                <Link href="/admin" className="">
                  Home
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/rooms" className="">
                  Rooms
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/allpayments" className="">
                  Payments
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/getallfeedbacks">Feedback</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div>
          <RoomIntro />
          <Link href={"/admin/rooms/addroom"}>
            <div className="bg-blue-500 w-1/6 p-4 m-4 justify-center flex rounded-md">
              <button>Add Room</button>
            </div>
          </Link>
        </div>
        <div>
          {pairs.map((room: any) => (
            <div className="flex justify-center p-4" key={room.id}>
              {room.map((item: any, index: any) => (
                <div key={index} className=" justify-center w-1/2">
                  <RoomCard prop={item} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <TestimonalsCard />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
