import React from "react";
import redHalo from "../../assets/Vector.png";
import blueHalo from "../../assets/Vector1.png";
import curveLine from "../../assets/Layer_1.png";

export default function AdmissionProcess() {
  const steps = [
    {
      number: "1",
      title: "Explore",
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      button: "Explore Now",
    },
    {
      number: "2",
      title: "Compare",
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      button: "Compare Now",
    },
    {
      number: "3",
      title: "Decide",
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      button: "Consult an Expert",
    },
    {
      number: "4",
      title: "Apply",
      text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      button: "Apply Now",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 px-4">
      {/* Background halos */}
      <img
        src={blueHalo}
        className="absolute right-0 top-0 w-[30vw] max-w-[400px] opacity-30 z-0"
        alt="blue halo"
      />
      <img
        src={redHalo}
        className="absolute right-0 bottom-0 w-[30vw] max-w-[400px] opacity-30 z-0"
        alt="red halo"
      />

      {/* Title */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Admission Process with <br /> Immigration Door
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          We are with you every <br className="md:hidden" /> step of the way!
        </p>
      </div>

      {/* Line Image */}
      <div className="relative z-0 flex justify-center">
        <img
          src={curveLine}
          alt="process line"
          className="absolute w-full max-w-[750px] left-1/2 -translate-x-1/2"
        />
      </div>

      {/* Steps */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 gap-16 px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-start ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="bg-white border border-gray-300 rounded-[40px] p-6 w-[90%] max-w-md shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {step.number} <span className="text-base font-semibold ml-2">{step.title}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-3">{step.text}</p>
              <button className="text-xs font-semibold bg-[#eaf2fc] text-blue-700 rounded-lg px-4 py-1">
                {step.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
