import TestimonalsCard from "@/components/home/TestimonalsCard";
import RoomCard, { RoomCardProps } from "@/components/room/RoomCard";
import RoomIntro from "@/components/room/RoomIntro";
import { useGetAllRoomsQuery } from "@/store/rooms/get-all-rooms";
import Link from "next/link";

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
  for (let i = 0; i < allrooms.length; i += 3) {
    if (i + 1 < allrooms.length) {
      pairs.push([allrooms[i], allrooms[i + 1], allrooms[i + 2]]);
    } else {
      pairs.push([allrooms[i]]);
    }
  }
  console.log(allrooms);
  return (
    <div>
      <header>
        <div className="HOTEL">HOTEL</div>
        <nav>
          <div className="flex justify-end">
            <div className="justify-end flex w-4/6">
              <div className="w-1/6">
                <Link href="/user" className="">
                  Home
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/user/rooms" className="">
                  Rooms
                </Link>
              </div>

              <div className="w-1/6">
                <Link href="/user/feedback">Feedback</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div>
          <RoomIntro />
        </div>
        <div>
          {pairs.map((room: any) => (
            <div className="flex justify-center p-4">
              {room.map((item: any, index: any) => (
                <div key={index} className=" justify-center w-1/3">
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
