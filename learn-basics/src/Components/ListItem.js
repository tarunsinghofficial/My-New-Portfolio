import React from "react";

function ListItem({logo, title, company, date, location, description}) {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white p-4 border border-blue rounded-lg gap-4 mb-6 mt-6 transform transition duration-1000 hover:scale-95">
        <div className="w-1/12 sm:w-44">
          <img src={logo} alt="logo" className="w-24 h-24 rounded-full" />
        </div>
        <div className="w-10/12 sm:w-fit px-2 ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">{title}</h1>
              <h2 className="text-lg text-gray-800">{company}</h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm text-gray-400">{date}</h3>
              <h3 className="text-sm text-gray-400">{location}</h3>
            </div>
          </div>
          <p className="text-sm text-gray-900">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ListItem;
