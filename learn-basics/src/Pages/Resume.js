import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Resume() {
  return (
    <>
      <Helmet>
        <title>CV | Tarun Singh</title>
      </Helmet>
      <div className="bg-white dark:bg-black h-screen">
        <div className="flex items-center justify-center">
          <h1 data-aos="fade-right" className="text-5xl font-bold text-blue">
            CV/Resume
          </h1>
        </div>
        <div
          id="pdf-container"
          className="h-screen flex container mx-auto mt-10 bg-blue p-3 rounded-xl dark:bg-none dark:drop-shadow-xl dark:text-white"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <iframe
            className="w-full justify-center"
            title="Resume"
            src="https://drive.google.com/file/d/1YU32-QkAFyhywUZguHFlDauHKKAoXt2l/preview"
            allow="autoplay"
          ></iframe>
        </div>
        <a href="https://drive.google.com/file/d/1YU32-QkAFyhywUZguHFlDauHKKAoXt2l&export=download" className="flex py-10 items-center justify-center">
        <button className="bg-blue text-white w-44 h-12 rounded-full dark:hover:drop-shadow-xl text-center">
          Download
        </button>
        </a>
      </div>
    </>
  );
}

export default Resume;

/* https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars */
/* For Navbar
 */