import { useGetPaymentHistoryByIdQuery } from "@/store/payment/get-all-payment-history-by-id";
import {
  getAllPaymentsApi,
  useGetAllPaymentsQuery,
} from "@/store/payment/get-all-payments";
import { PaymentFormData } from "@/store/payment/payment-api";
import Image from "next/image";
import Link from "next/link";
const AllPaymentHistoryById: React.FC = () => {
  const { data: allhistory, isLoading, isError } = useGetAllPaymentsQuery("");

  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(allhistory);

  console.log(allhistory, "alllllllllll");
  return (
    <div>
      <header>
        <div className="text-blue-500 text-5xl p-4 font-bold">HMS</div>
        <nav>
          <div className="flex justify-end">
            <div className="justify-end flex w-4/6">
              <div className="w-1/6">
                <Link href="/admin" className="">
                  Home
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/rooms" className="">
                  Rooms
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/allpayments" className="">
                  Payments
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/admin/getallfeedbacks">Feedback</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="p-10">
        <div className="flex justify-center text-2xl font-bold pb-4">
          All Payment Histories
        </div>
        {allhistory.map((history: any) => (
          <div className="flex border-primary border-2 m-2 p-1 justify-between" key={history.id}>
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
    </div>
  );
};
export default AllPaymentHistoryById;
