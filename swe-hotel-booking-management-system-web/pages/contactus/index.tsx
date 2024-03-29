import FeedbackCard from "@/components/feedback/FeedbackCard";
import ContactCard from "@/components/feedback/FeedbackCard";

function ContactUs() {
    return (
      <div>
        <div>
          <h1 className="text-5xl font-bold flex justify-center">CONTACT US</h1>
        </div>
        <div className="w-2/3 p-6">
          <h2 className="text-3xl font-semibold pb-4">WE ARE HERE FOR YOU</h2>
          <p>
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="flex">
          <div className="p-20 text-xl">
            <p>497 Evergreen Rd. Roseville, CA 95673</p>
            <p>Phone: +44 345 678 903</p>
            <p>Email: luxury_hotels@gmail.com</p>
          </div>
          <FeedbackCard />
        </div>
      </div>
    );
}

export default ContactUs;