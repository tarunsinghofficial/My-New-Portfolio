import React from "react";

function ProjectItem({project, title, link}) {
  return (
    <>
      <div
        href="##"
        className="bg-white overflow-hidden drop-shadow-md dark:drop-shadow-xl w-96 h-72 rounded-md items-center justify-center"
      >
        <div className="w-full bg-cover overflow-hidden">
          <img src={project} alt="" className="w-full h-56 transform transition duration-1000 hover:scale-125" />
        </div>
        <div class="flex mt-4 justify-between px-4">
          <h3 className="font-bold text-md">
            {title}
          </h3>
          <a
            href={link}
            class="items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-sky-400 hover:bg-sky-300"
          >
            Source
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
