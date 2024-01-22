import React from "react";
import Image from "next/image";

const PaymentCard: React.FC = () => {
 return (
   <div className="max-w-md mx-auto p-8">
     <h1 className="text-2xl font-semibold mb-6">Payment Details</h1>

     <div className="mb-4">
       <label
         htmlFor="phoneNumber"
         className="text-sm font-medium text-gray-600"
       >
         Phone Number
       </label>
       <input
         type="text"
         id="phoneNumber"
         placeholder="Enter your phone number"
         className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
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
       />
     </div>

     {/* Booking Button */}
     <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
       Book Now
     </button>
   </div>
 );
};

export default PaymentCard;
