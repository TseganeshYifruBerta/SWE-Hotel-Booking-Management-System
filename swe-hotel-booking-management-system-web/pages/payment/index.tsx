import PaymentCard from "@/components/payment/PaymentCard"
import Image from "next/image"
function Payment() {
    return (
      <div className="flex justify-center">
        <div className="flex border-2 m-6 border-blue-500 w-2/3">
          <div className="w-1/2">
            <PaymentCard />
          </div>
          <div className="w-1/2 border-l-2 border-black pl-6 ml-6">
            <Image
              src={"/images/payment.png"}
              alt={""}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    );
}

export default Payment