const ContactCard : React.FC = () => {
    return (
      <div className="mx-auto p-8">
        <div className="mb-4">
          <label htmlFor="Name" className="text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="Name"
            className="w-full border-2  focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-2  focus:outline-none focus:border-blue-500"
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
          />
        </div>
        <div className="flex justify-end">
          <button className="border-blue-500 border-4 px-4 py-2 rounded-md">
            Send
          </button>
        </div>
      </div>
    );
}

export default ContactCard;