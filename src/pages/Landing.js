import React from "react";


const Landing = () => {
  return (
    <section className="bg-white py-6 px-12 mt-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Text Content Section */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold text-blue-600">
            Simplify the Search<br />
            Elevate Your Success<br />
            Start Your Dream Job Today
          </h2>
          <button className="mt-7 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-500">
            Get Started
          </button>
        </div>
        {/* Image Section */}
        <div className="w-1/2">
          <img src="/bg img.png" alt="Animated Illustration" className="w-64 h-64 ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
