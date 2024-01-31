import SignInCard from "@/components/signup_signin/SignInCard";
import Image from "next/image";

function SignIn() {
  return (
    <div className="flex justify-center">
      <div className="flex w-2/3">
        <div className="w-1/2">
          <SignInCard />
        </div>
        <div className="border-r border-black h-72 mt-16"></div>
        <div className="w-1/2 pl-6 ml-6">
          <Image
            src={"/images/login.png"}
            alt={""}
            width={400}
            height={400}
            className="pt-16"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
