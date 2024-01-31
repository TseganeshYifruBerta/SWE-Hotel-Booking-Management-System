import Link from "next/link";
import { Props } from "./RoomCard"
import Image from "next/image"
const RoomDetail: React.FC<Props> = ({ prop }) => (
    <div>
        <div className="text-4xl pb-6 font-bold">{prop.title}</div>
        <div className="">
            <Image src={"/images/room1.png"} alt={""} width={500} height={500} />
        </div>

        <div className="flex justify-center">
            <div className="w-2/3">
                <Link href={`/payment/${prop.id}`}>
                    <div className="py-2 flex w-1/3 bg-green-500 text-white font-semibold my-4 justify-center rounded-md">
                        <button className="">Book Now</button>
                    </div>
                </Link>
                <div className="text-xl flex justify-center">
                    {prop.description}
                </div>
                <div className="py-2 flex w-1/3 bg-blue-500 text-white font-semibold rounded-md justify-center">
                    Price: {prop.price}
                </div>
                <div className="py-2 flex w-1/3 bg-blue-500 text-white font-semibold my-4 justify-center rounded-md">
                    Available Rooms : {prop.availableRooms}
                </div>
            </div>
        </div>
    </div>
)

export default RoomDetail