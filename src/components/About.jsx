import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I’m Gusti Bintang, but everyone calls me Bintang. I’m from South Kalimantan.
        </p>

        <br />

        <p className="text-xl">
        I graduated from Vocational High School Telkom Banjarbaru, majoring in Software Engineering. Now, I’m pursuing a Bachelor’s degree in Law because I want to focus on Cyber Law combining my tech background with legal knowledge to understand and solve issues in digital security, data privacy, and technology regulations.
        </p>
      </div>
    </div>
  );
};

export default About;
