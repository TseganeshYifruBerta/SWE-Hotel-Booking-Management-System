import HomeIntro from "@/components/home/HomeIntro";
import Link from "next/link";

function UserHomePage() {
  return (
    <div>
      <header>
        <div className="text-blue-500 text-5xl p-4 font-bold">HMS</div>
        <nav>
          <div className="flex justify-end">
            <div className="justify-end flex w-4/6">
              <div className="w-1/6">
                <Link href="/user" className="">
                  Home
                </Link>
              </div>
              <div className="w-1/6">
                <Link href="/user/rooms" className="">
                  Rooms
                </Link>
              </div>

              <div className="w-1/6">
                <Link href="/user/feedback">Feedback</Link>
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

export default UserHomePage;
