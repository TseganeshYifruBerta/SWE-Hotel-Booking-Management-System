import TestimonalsCard from "@/components/home/TestimonalsCard";
import RoomCard from "@/components/room/RoomCard";
import RoomIntro from "@/components/room/RoomIntro";

function Rooms() {
  return (
    <div>
      <div>
        <RoomIntro />
      </div>
      <div>
        <div className="flex justify-center p-4">
          <RoomCard />
          <RoomCard />
        </div>
        <div className="flex justify-center">
          <RoomCard />
          <RoomCard />
        </div>
      </div>
      <div className="mt-4">
        <TestimonalsCard />
      </div>
    </div>
  );
}

export default Rooms;
