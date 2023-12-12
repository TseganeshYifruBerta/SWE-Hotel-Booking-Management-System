import PaymentCard from "@/components/payment/PaymentCard"
import Image from "next/image"
function Payment() {
    return (
      <div className="flex justify-center">
        <div className="flex border-2 m-6 border-blue-500 w-2/3">
          <div className="w-1/2">
            <PaymentCard />
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
}

export default Payment