import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store";
import { userPayment } from "@/store/actions/paymentAction";
import router from "next/router";
import Link from "next/link";
import LoadImage from "@/pages/home/image";

const PaymentCard: React.FC = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  const [photo, setPhoto] = useState<File | null>(null);
  const [transactionId, setTransactionId] = useState("")
const [imageUrl, setImageUrl] = useState("")
  const dispatch: AppDispatch = useDispatch(); // Use AppDispatch type
  useSelector((state: RootState) => state.payment);

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
    
console.log(data)
  try {
    await dispatch(userPayment(data));
    setTimeout(() => {
      // router.push("/");
    }, 1000);
    console.log("Payment fullfilled succesfully");
  } catch (error) {
    console.error("Error during payment:", error);
  }
};

 const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
   const file = e.target.files?.[0];
   const blobFile:any = await convertFileToBlob(file);

   setPhoto(blobFile);
    setImageUrl(URL.createObjectURL(blobFile));

   console.log(photo)
 };
  const convertFileToBlob = (file:any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const blob = new Blob([reader.result], { type: file.type });
          resolve(blob);
        } else {
          reject(new Error("Failed to read file."));
        }
      };

      reader.onerror = reject;

      reader.readAsArrayBuffer(file);
    });
  };


   const handlePhoneChange = (event:any) => {
     // Remove any non-numeric characters from the input
     const formattedPhoneNumber = event.target.value.replace(/\D/g, "");
     // Restrict the input to 10 characters
     const truncatedPhoneNumber = formattedPhoneNumber.slice(0, 10);
     setPhoneNumber(truncatedPhoneNumber);
   };

     const handleTransactionChange = (event: any) => {
       
       let truncatedTransaction = event.target.value.slice(0, 10);
       truncatedTransaction.replace(/[^A-Z0-9]/g, "");
       truncatedTransaction = truncatedTransaction.toUpperCase()
       setTransactionId(truncatedTransaction);
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
           placeholder="Enter valid phone number"
           value={phoneNumber}
           onChange={handlePhoneChange}
         />
       </div>


       <div className="mb-4">
         <label htmlFor="photo" className="text-sm font-medium text-gray-600">
           Photo (Screenshot)
         </label>
         <input
           type="file"
           id="photo"
           accept="image/*"
           className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
           onChange={handlePhotoChange}
         />
       </div>


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
           placeholder="Only Uppercases or Numbers"
           className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
           value={transactionId}
           onChange={handleTransactionChange}
         />
       </div>

       <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
         Book Now
       </button>
     </div>
   </form>
 );
};

export default PaymentCard;
