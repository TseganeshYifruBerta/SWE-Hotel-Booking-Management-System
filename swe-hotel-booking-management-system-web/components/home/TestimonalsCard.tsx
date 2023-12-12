import React from "react"
const TestimonalsCard : React.FC = () => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold justify-center flex w-full">
            Testimonials
          </h1>
          <h3 className="text-lg justify-center w-full flex">
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </h3>
          <p className="justify-center flex w-full">Mr. and Mrs. Baxter, UK</p>
        </div>
      </div>
    );
}

export default TestimonalsCard