import React from "react";
import redHalo from "../../assets/Vector.png";
import blueHalo from "../../assets/Vector1.png";
import curveLine from "../../assets/Layer_1.png";
import blueHaloo from "../../assets/Vectorred.png";


export default function AdmissionProcess() {
  const steps = [
    {
      number: "1",
      title: "Explore",
      text:
        "Discover programs and universities that match your goals. Start exploring opportunities tailored to your future.",
      button: "Explore Now",
    },
    {
      number: "2",
      title: "Compare",
      text:
        "Compare programs, costs, and admission requirements across institutions to make informed decisions.",
      button: "Compare Now",
    },
    {
      number: "3",
      title: "Decide",
      text:
        "Decide on the best path with expert advice, guidance, and resources that support your goals.",
      button: "Consult an Expert",
    },
    {
      number: "4",
      title: "Apply",
      text:
        "Submit your application with confidence. Let us help you through every step of the process.",
      button: "Apply Now",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 px-4 pb-0">
      {/* Background halos */}
      <img
        src={blueHalo}
        className="absolute right-[-1%] top-[5%] w-[30vw] max-w-[800px] opacity-30 z-0"
        alt="blue halo"
      />
      <img
        src={redHalo}
        className="absolute right-[-1%] bottom-[5%] w-[30vw] max-w-[800px] opacity-30 z-0"
        alt="red halo"
 />
           <img
              src={blueHaloo}
              className="absolute left-[-3%] bottom-[1%] w-[50vw] max-w-[500px] opacity-30 z-0"
              alt="red halo"
      />

      {/* Title */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Admission Process with <br /> Immigration Door
        </h2>
        <p className="text-base text-gray-600 mt-2">
          We are with you every <br  /> step of the way!
        </p>
      </div>

      {/* Line Image - moved below title and adjusted down */}
     <div className="relative z-10 mt-[-1rem] flex justify-center">
  <img
    src={curveLine}
    alt="process line"
    className="absolute w-[90%] max-w-[950px] left-1/2 -translate-x-1/2  top-[13.5rem]"
  />
</div>


      

      {/* Steps */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 gap-5 px-6 pt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="p-5 w-[90%] max-w-md">

              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                {step.number}
                <span className="text-2xl font-semibold ml-2">{step.title}</span>
              </h3>
              <p className="text-xl  text-gray-600 mb-3">{step.text}</p>
              <button className="text-base font-semibold bg-[#eaf2fc] text-blue-700 rounded-lg px-4 py-1">
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
