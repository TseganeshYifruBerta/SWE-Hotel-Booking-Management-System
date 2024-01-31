import HomeIntro from "@/components/home/HomeIntro";
import Link from "next/link";

function AdminHomePage() {
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
      <div>
        <HomeIntro />
      </div>
    </div>
  );
}

export default AdminHomePage;
