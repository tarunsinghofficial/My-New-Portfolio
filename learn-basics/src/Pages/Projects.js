import React from 'react'
import pro1 from "../Assets/pro1.png"
import pro2 from "../Assets/pro2.png"
import pro3 from "../Assets/pro3.png"
import pro4 from "../Assets/pro4.png"
import pro5 from "../Assets/pro5.gif"

import {Helmet} from "react-helmet"
import ProjectItem from '../Components/ProjectItem'

const projects = [
  {
    item: 1,
    title: "Apollo Music Player",
    img: pro2,
    source: "https://github.com/tarunsinghofficial/Apollo-Player-Music-Streaming-App"
  },
  {
    item: 2,
    title: "The NewsXTimes",
    img: pro1,
    source: "https://github.com/tarunsinghofficial/News-App-React-Native"
  },
  {
    item: 3,
    title: "Google Search UI",
    img: pro3,
    source: "https://github.com/tarunsinghofficial/Google-Search-UI"
  },
  {
    item: 4,
    title: "OneDevPlace",
    img: pro4,
    source: "https://github.com/tarunsinghofficial/OneDevPlace"
  },
  {
    item: 5,
    title: "LinkedIn Learn Clone",
    img: pro5,
    source: "https://github.com/tarunsinghofficial/Linkedin-Learn-Clone"
  }
]


function Projects() {
  return ( 
    <>
    <Helmet>
      <title>Project | Tarun Singh</title>
    </Helmet>
    <section className="bg-white dark:bg-black">
      <div className="flex items-center justify-center" data-aos="fade-right">
        <h1 className="text-5xl font-bold text-blue">Projects</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-center md:flex-row gap-4 mt-10 sm:mx-12">
       {projects.map(function(d, idx) {
        return (
          <div data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false">
          <ProjectItem
            key={idx}
            title={d.title}
            project={d.img}
            link={d.source}
          />
          </div>
        )
       })}
      </div>
    </section>
    </>
  )
}

export default Projects