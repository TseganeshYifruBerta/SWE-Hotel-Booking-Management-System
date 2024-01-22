import React from "react"
import Image from "next/image";

const SignInCard : React.FC = () => {
      return (
        <div className="max-w-md mx-auto p-8">
          <div className="flex justify-center mb-2">
            <Image
              src={"/images/profile.png"}
              alt={""}
              width={90}
              height={90}
            />
          </div>
          <h1 className="text-2xl font-bold mb-6 flex justify-center">
            SIGN IN
          </h1>

          <div className="mb-4">
            <input
              type="text"
              id="user name"
              placeholder="USER NAME"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
          </div>
          
          <div className="flex justify-center">
            <button className="border-blue-500 border-4 px-4 py-2 rounded-md justify-center">
              Sign In
            </button>
          </div>
        </div>
      );
}

export default SignInCard;