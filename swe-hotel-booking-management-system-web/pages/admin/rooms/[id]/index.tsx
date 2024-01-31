import RoomDetail from "@/components/room/RoomDetail";
import { useGetRoomDetailByIdQuery } from "@/store/rooms/get-room-detail-by-id";
import Link from "next/link";
import { useRouter } from "next/router";

const RoomDetailById: React.FC = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  // const roomId = 1
  const {
    data: roomDetail,
    isLoading,
    isError,
  } = useGetRoomDetailByIdQuery({ roomId: roomId });
  if (isLoading) {
    return <div>IsLoading</div>;
  }
  console.log(roomDetail);
  return (
    <div>
      <header>
        <div className="HOTEL">HOTEL</div>
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
                <Link href="/admin/rooms/allpayments" className="">
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
      <div className="p-10">
        <RoomDetail prop={roomDetail.room} />
      </div>
    </div>
  );
};

export default RoomDetailById;
