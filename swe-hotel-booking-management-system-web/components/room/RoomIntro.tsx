import React from "react";
import Image from "next/image";

const RoomIntro : React.FC = () =>{
    return (
      <div>
        <div className="flex flex-row">
          <div className="w-1/2 flex items-center justify-center">
            <div className="ml-8">
              <h1 className="text-3xl">WELCOME TO</h1>
              <h1 className="text-5xl font-bold">HOTEL</h1>
              <h3>
                Book your stay and enjoy Luxury redefined at the most affordable
                rates.
              </h3>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/homeroom.png"}
              alt={""}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex justify-center p-4 m-6">
          <div className="flex flex-col w-1/2">
            <h1 className="text-4xl font-extrabold flex justify-center mb-4">
              ROOMS AND RATES
            </h1>
            <h3 className="flex justify-center">
              Each of our bright, light-flooded rooms come with everything you
              could possibly need for a comfortable stay. And yes, comfort isn’t
              our only objective, we also value good design, sleek contemporary
              furnishing complemented by the rich tones of nature’s palette as
              visible from our rooms’ sea-view windows and terraces.
            </h3>
          </div>
        </div>
      </div>
    );
}

export default RoomIntro;