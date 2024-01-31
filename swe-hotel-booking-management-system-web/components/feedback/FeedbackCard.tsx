import { FeedbackUploadFormData, uploadfeedback } from "@/store/feedback/feed-back-api";
import { useState } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

const FeedbackCard: React.FC<InjectedFormProps<FeedbackUploadFormData>> = ({
  handleSubmit,
})=>{
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  let values = {
    email: email,
    message: message,
  };


  const onSubmit = async () => {
    try {
      console.log(values);

      const data = await uploadfeedback(values as FeedbackUploadFormData);
      console.log(data);
      console.log("succesfully uploaded");
      // showToast("Upload successful", "success");
    } catch (error) {
      console.error("feedback error:", error);
      console.log(values);

      // showToast("Login error: " + (error as Error).message, "error");
    }
  };






    return (
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto p-8">
         

          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-2  focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <input
              type="text"
              id="email"
              className="w-full border-2  focus:outline-none focus:border-blue-500 p-2 pb-32"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      </form>
    );
    }

const ConnectedFeedbackForm = reduxForm<FeedbackUploadFormData>({
  form: "feedback",
})(FeedbackCard);

export default ConnectedFeedbackForm;