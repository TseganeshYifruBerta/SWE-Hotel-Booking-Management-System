import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { userPayment } from "@/store/actions/paymentAction";
import router from "next/router";

const PaymentCard: React.FC = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  const [photo, setPhoto] = useState("");
  const [transactionId, setTransactionId] = useState("")

  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch type
  useSelector((state: RootState) => state.studentregister);

 const data = {
   phoneNumber: phoneNumber,
   photo: photo,
   transactionId: transactionId
 };
const submitForm = async (data: any, e: React.FormEvent) => {
  e.preventDefault();

  (data.phoneNumber = phoneNumber),
    (data.photo = photo),
    (data.transactionId = transactionId);
    

  try {
    await dispatch(userPayment(data));
    setTimeout(() => {
      router.push("/");
    }, 1000);
    console.log("Payment fullfilled succesfully");
  } catch (error) {
    console.error("Error during payment:", error);
  }
};


 return (
   <form onSubmit={(e) => submitForm(data, e)}>
     <div className="max-w-md mx-auto p-8">
       <h1 className="text-2xl font-semibold mb-6">Payment Details</h1>
       <div className="mb-4">
         <label htmlFor="photo" className="text-sm font-medium text-gray-600">
           Phone Number
         </label>
         <input
           type="tel"
           id="photo"
           className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
           placeholder="Enter your phone number"
           value={phoneNumber}
           onChange={(e) => setPhoneNumber(e.target.value)}
         />
       </div>

       {/* Photo (Screenshot) */}
       <div className="mb-4">
         <label htmlFor="photo" className="text-sm font-medium text-gray-600">
           Photo (Screenshot)
         </label>
         <input
           type="file"
           id="photo"
           accept="image/*"
           className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
           value={photo}
           onChange={(e) => setPhoto(e.target.value)}
         />
       </div>

       {/* Transaction ID */}
       <div className="mb-4">
         <label
           htmlFor="transactionId"
           className="text-sm font-medium text-gray-600"
         >
           Transaction ID
         </label>
         <input
           type="text"
           id="transactionId"
           placeholder="Enter transaction ID"
           className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
           value={transactionId}
           onChange={(e) => setTransactionId(e.target.value)}
         />
       </div>

       {/* Booking Button */}
       <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
         Book Now
       </button>
     </div>
   </form>
 );
};

export default PaymentCard;
