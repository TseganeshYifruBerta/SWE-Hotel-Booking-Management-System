import { useGetRoomDetailByIdQuery } from "@/store/rooms/get-room-detail-by-id"

const RoomDetailById : React.FC = () => {

    const roomId = 1
    const {data: roomDetail, isLoading, isError} = useGetRoomDetailByIdQuery({roomId: roomId})
    if (isLoading){
        return(
            <div>IsLoading</div>
        )
    }
    console.log(roomDetail)
    return(
        <div>
            RoomDetail
        </div>
    )
}

export default RoomDetailById