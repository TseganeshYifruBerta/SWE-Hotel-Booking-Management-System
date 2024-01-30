import AddRoomCard from "@/components/room/AddRoom"

const AddRoom: React.FC = () => {
    return (
      <div className="flex justify-center pt-10">
        <div className="flex border-2 m-6 border-blue-500 w-2/3 ">
          <AddRoomCard />
        </div>
      </div>
    );
}

export default AddRoom