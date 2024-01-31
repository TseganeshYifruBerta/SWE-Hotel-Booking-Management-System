import { useGetPaymentHistoryByIdQuery } from "@/store/payment/get-all-payment-history-by-id";
import { getAllPaymentsApi, useGetAllPaymentsQuery } from "@/store/payment/get-all-payments";
import { PaymentFormData } from "@/store/payment/payment-api";
import Image from "next/image"
const AllPaymentHistoryById : React.FC =() =>{
const {data:allhistory, isLoading, isError} = useGetAllPaymentsQuery("")

if (isLoading){
  return(
    <div>Loading</div>
  )
}
console.log(allhistory);
  
    console.log(allhistory, "alllllllllll")
return (
  <div className="p-10">
    <div className="flex justify-center text-2xl font-bold pb-4">
      All Payment Histories
    </div>
    {allhistory.map((history: any) => (
      <div className="flex border-primary border-2 m-2 p-1 justify-between">
        <div className="w-1/4">{history.createdAt}</div>
        <div className="w-1/4">
          <img
            src={history.photo.slice(5, history.photo.length)}
            alt={""}
            width={100}
            height={100}
          />
        </div>
        <div className="w-1/4">{history.transactionId}</div>
        <div className="w-1/4">{history.phoneNumber}</div>
      </div>
    ))}
  </div>
);
}
export default AllPaymentHistoryById