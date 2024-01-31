import RoomDetail from "@/components/room/RoomDetail";
import { useGetRoomDetailByIdQuery } from "@/store/rooms/get-room-detail-by-id"
import { useRouter } from "next/router";

const RoomDetailById : React.FC = () => {
const router = useRouter();
const roomId = router.query.id as string;
    // const roomId = 1
    const {data: roomDetail, isLoading, isError} = useGetRoomDetailByIdQuery({roomId: roomId})
    if (isLoading){
        return(
            <div>IsLoading</div>
        )
    }
console.log(roomDetail) 
    return(
        <div className="p-10">
            <RoomDetail prop={roomDetail.room} />
        </div>
    )
}

export default RoomDetailById