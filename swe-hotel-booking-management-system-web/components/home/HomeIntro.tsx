import React from "react";
import Image from "next/image";
import HotelCard from "../hotel/HotelCard";
import TestimonalsCard from "./TestimonalsCard";
import Link from "next/link";
const HomeIntro: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="w-1/2 items-center justify-center pl-10 pt-20">
          <div className="ml-8">
            <h1 className="text-3xl">WELCOME TO</h1>
            <h1 className="text-5xl font-bold">HOTEL</h1>
            <h3>
              Book your stay and enjoy Luxury redefined at the most affordable
              rates.
            </h3>
          </div>
          <div className="pt-10 flex">
            <Link href={"/signup"}>
              <div>
                <button className="text-white bg-blue-500 p-2 m-2 rounded-md w-[160px]">
                  SignUp
                </button>
              </div>
            </Link>
            <Link href={"/signin"}>
              <div>
                <button className="text-white bg-blue-500 p-2 m-2 px-0 rounded-md w-[160px]">
                  SignIn
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={"/images/home.png"} alt={""} width={500} height={500} />
        </div>
      </div>
      <div>
        <h1 className="text-xl flex justify-center">
          All our room types are including complementary breakfast
        </h1>
        <div>
          <HotelCard
            hotelname={"Luxury redefined"}
            hoteldiscription={
              "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."
            }
            hotelpicture={"hotel1.png"}
          />
          <HotelCard
            hotelname={"Leave your worries in the sand"}
            hoteldiscription={
              "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. "
            }
            hotelpicture={"hotel2.png"}
          />
        </div>
      </div>
      <div className="">
        <TestimonalsCard />
      </div>
    </div>
  );
};

export default HomeIntro;
