import { useGetPaymentHistoryByIdQuery } from "@/store/payment/get-all-payment-history-by-id";

const AllPaymentHistoryById : React.FC =() =>{
const {data:allhistory, isLoading, isError} = useGetPaymentHistoryByIdQuery({userId:""})

if (isLoading){
  return(
    <div>Loading</div>
  )
}
console.log(allhistory);
    const allHistory = [
      {
        date: "1234567",
        photo: "1234567890",
        transactionId: "12345678",
        phoneNumber: "123456789",
      },
      {
        date: "1234567",
        photo: "1234567890",
        transactionId: "12345678",
        phoneNumber: "123456789",
      },
      {
        date: "1234567",
        photo: "1234567890",
        transactionId: "12345678",
        phoneNumber: "123456789",
      },
    ];
return (
  <div className="p-10">
    <div className="flex justify-center text-2xl font-bold pb-4">
      All Payment Histories
    </div>
    {allHistory.map((history) => (
      <div className="flex border-primary border-2 m-2 p-1">
        <div className="w-1/4">{history.date}</div>
        <div className="w-1/4">{history.photo}</div>
        <div className="w-1/4">{history.transactionId}</div>
        <div className="w-1/4">{history.phoneNumber}</div>
      </div>
    ))}
  </div>
);
}
export default AllPaymentHistoryById