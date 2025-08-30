import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100 px-6">
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-Nosifer text-sky-700 mb-2">
          CONVERTIO
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Convert Your currency Now!
        </p>

        {/* Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331947.png" 
          alt="Currency Converter"
          className="w-3/4 md:w-1/2 mx-auto mb-6"
        />

        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Convert your currency into more than <br />
          <span className="font-">130+ countries’ currency</span>  
          — convert Now!
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/Login')}
          className="bg-brown-700 text-brown px-6 py-2 rounded-lg shadow-md hover:bg-red-800 transition"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Home;
