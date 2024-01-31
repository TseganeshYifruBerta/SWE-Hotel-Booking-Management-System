import AddRoomCard from "@/components/room/AddRoom";
import Link from "next/link";

const AddRoom: React.FC = () => {
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
                <Link href="/admin/feedback">Feedback</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex justify-center pt-10">
        <div className="flex border-2 m-6 border-blue-500 w-2/3 ">
          <AddRoomCard />
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
