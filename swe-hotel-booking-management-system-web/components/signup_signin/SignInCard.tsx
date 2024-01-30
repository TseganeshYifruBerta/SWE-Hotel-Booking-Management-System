import React, { useState } from "react"
import Image from "next/image";
import { usersignup } from "@/store/signup/user-signup-api";
import { UserSignInFormData, usersignin } from "@/store/signin/user-signin-api";
import { InjectedFormProps, reduxForm } from "redux-form";

const SignInCard: React.FC<InjectedFormProps<UserSignInFormData>> = ({
  handleSubmit,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (event: any) => {
    // Remove any non-numeric characters from the input
    const formattedPhoneNumber = event.target.value.replace(/\D/g, "");
    // Restrict the input to 10 characters
    const truncatedPhoneNumber = formattedPhoneNumber.slice(0, 10);
    setPhoneNumber(truncatedPhoneNumber);
  };

  let values = {
    phoneNumber: phoneNumber,
    password: password,
  };

  const onSubmit = async () => {
    try {
      console.log(values);

      const data = await usersignin(values as UserSignInFormData);
      console.log(data);
      console.log("succesfully uploaded");
      // showToast("Upload successful", "success");
    } catch (error) {
      console.error("payment error:", error);
      console.log(values);

      // showToast("Login error: " + (error as Error).message, "error");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-md mx-auto p-8">
        <div className="flex justify-center mb-2">
          <Image src={"/images/profile.png"} alt={""} width={90} height={90} />
        </div>
        <h1 className="text-2xl font-bold mb-6 flex justify-center">SIGN IN</h1>

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
    </form>
  );
};

const ConnectedSigninForm = reduxForm<UserSignInFormData>({
  form: "usersignin",
})(SignInCard);

export default ConnectedSigninForm;