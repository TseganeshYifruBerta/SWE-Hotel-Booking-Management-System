// import PaymentCard from "@/components/payment/PaymentCard"

import { PaymentFormData, payment } from "@/store/payment/payment-api";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

const PaymentCard: React.FC = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState<string>("");
  const [transactionId, setTransactionId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");

  const handlePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const blobFile: any = await convertFileToBlob(file);

    setPhoto(blobFile);
    setImageUrl(URL.createObjectURL(blobFile));
  };
  const convertFileToBlob = (file: any) => {
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

  const handlePhoneChange = (event: any) => {
    // Remove any non-numeric characters from the input
    const formattedPhoneNumber = event.target.value.replace(/\D/g, "");
    // Restrict the input to 10 characters
    const truncatedPhoneNumber = formattedPhoneNumber.slice(0, 10);
    setPhoneNumber(truncatedPhoneNumber);
  };

  const handleTransactionChange = (event: any) => {
    let truncatedTransaction = event.target.value.slice(0, 10);
    truncatedTransaction.replace(/[^A-Z0-9]/g, "");
    truncatedTransaction = truncatedTransaction.toUpperCase();
    setTransactionId(truncatedTransaction);
  };

  const values: PaymentFormData = {
    phoneNumber: phoneNumber,
    transactionId: transactionId,
    photo: photo,
    email: email,
    id: roomId,
  };
  const onSubmit = async (datas: PaymentFormData) => {
    try {
      datas.photo = imageUrl;
      // console.log(datas);

      const data = await payment(datas as PaymentFormData);
      console.log("succesfully uploaded");
      // showToast("Upload successful", "success");
    } catch (error) {
      console.error("payment error:", error);
      console.log(values);

      // showToast("Login error: " + (error as Error).message, "error");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex border-2 m-6 border-blue-500 w-2/3">
        <div className="w-1/2">
          <form>
            <div className="max-w-md mx-auto p-8">
              <h1 className="text-2xl font-semibold mb-6">Payment Details</h1>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-600"
                >
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
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="photo"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="text-sm font-medium text-gray-600"
                >
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

              <button
                className="border-blue-500 border-4 px-4 py-2 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit(values);
                }}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
        <div className="border-r border-black h-72 mt-16"></div>
        <div className="w-1/2 pl-6 ml-6">
          <Image
            src={"/images/payment.png"}
            alt={""}
            width={400}
            height={400}
            className="pt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
