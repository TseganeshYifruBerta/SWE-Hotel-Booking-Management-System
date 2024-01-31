import { useGetAllFeedbackQuery } from "@/store/feedback/get-all-feedbacks";
import { useGetPaymentHistoryByIdQuery } from "@/store/payment/get-all-payment-history-by-id";
import {
  getAllPaymentsApi,
  useGetAllPaymentsQuery,
} from "@/store/payment/get-all-payments";
import { PaymentFormData } from "@/store/payment/payment-api";
import Image from "next/image";
import Link from "next/link";
const AllFeedback: React.FC = () => {
  const { data: allfeedback, isLoading, isError } = useGetAllFeedbackQuery("");

  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(allfeedback);

  return (
    <div>
      <header>
        <div className="HOTEL">HOTEL</div>
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
                <Link href="/admin/rooms/allpayments" className="">
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
          All Customer Feedbacks
        </div>
        {allfeedback.map((history: any) => (
          <div className="flex border-primary border-2 m-2 p-1 justify-between">
            <div className="w-1/4">{history.id}</div>
            <div className="w-1/4">{history.message}</div>
            <div className="w-1/4">{history.email}</div>
            <div className="w-1/4">{history.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllFeedback;
