import React from "react";
import kakiku from "../assets/portfolio/kakiku.png";
import perpus from "../assets/portfolio/perpus.png";
import kbli from "../assets/portfolio/kbli.png";
import tahura from "../assets/portfolio/tahura.png";
import sbux from "../assets/portfolio/sbux.png";
import faq from "../assets/portfolio/faq.png";
import available from "../assets/portfolio/available.png";
import portra from "../assets/portfolio/portra.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kakiku,
    },
    {
      id: 2,
      src: tahura,
    },
    {
      id: 3,
      src: kbli,
    },
    {
      id: 4,
      src: sbux,
    },
    {
      id: 5,
      src: perpus,
    },
    {
      id: 6,
      src: faq,
    },

    {
      id: 7,
      src: available,
    },
    {
      id: 8,
      src: portra,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
