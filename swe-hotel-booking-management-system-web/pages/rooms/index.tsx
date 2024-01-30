import TestimonalsCard from "@/components/home/TestimonalsCard";
import RoomCard from "@/components/room/RoomCard";
import RoomIntro from "@/components/room/RoomIntro";
import { useGetAllRoomsQuery } from "@/store/rooms/get-all-rooms";

function Rooms() {

  const {data:allrooms, isLoading, isError} = useGetAllRoomsQuery({userId:""})
  if (isLoading){
    return <div>Loading</div>
  }

  const pairs = [];
  for (let i = 0; i < allrooms.length; i += 2) {
    if (i + 1 < allrooms.length) {
      pairs.push([allrooms[i], allrooms[i + 1]]);
    } else {
      pairs.push([allrooms[i]]);
    }
  }
  console.log(allrooms)
  return (
    <div>
      <div>
        <RoomIntro />
      </div>
      <div>
        {pairs.map((room) => (
          <div className="flex justify-center p-4">
            <RoomCard />
            <RoomCard />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <TestimonalsCard />
      </div>
    </div>
  );
}

export default Rooms;
