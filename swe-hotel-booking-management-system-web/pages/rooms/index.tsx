import TestimonalsCard from "@/components/home/TestimonalsCard";
import RoomCard from "@/components/room/RoomCard";

function Rooms() {
  return (
    <div>
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
