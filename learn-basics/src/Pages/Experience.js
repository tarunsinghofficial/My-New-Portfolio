import React from "react";
import { Helmet } from "react-helmet";
import ListItem from "../Components/ListItem";

import gfg from "../Assets/gfg.png";
import cm from "../Assets/cm.jpg";
import gssoc from "../Assets/gssoc.png";
import guvi from "../Assets/guvi.png";
import tp from "../Assets/tp.jpg";

function Experience() {

  return (
    <>
      <Helmet>
        <title>Experience | Tarun Singh</title>
      </Helmet>
      <div className="bg-white dark:bg-black">
        <div className="flex items-center justify-center" data-aos="fade-right">
          <h1 className="text-5xl font-bold text-blue">Experience</h1>
        </div>
        <div
          className="mt-10 p-4 container mx-auto text-xl relative"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          <ListItem
            logo={gfg}
            title="Technical Content Reviewer"
            company="GeeksforGeeks"
            date="Feb 2023 - Present"
            description="As a reviewer at GeeksforGeeks, my task is to review the technical articles of other freelancers, technical writers, etc. As far now, I have reviewed 20+ articles related to React, HTML/CSS, JavaScript, Bootstrap, Tailwind, React MUI, etc."
            location="Freelance (Remote)"
          />
          <ListItem
            logo={tp}
            title="Technical Content Writer"
            company="Tutorialspoint"
            date="Jan 2023 - Present"
            description="As a freelancer at Tutorialspoint, I write technical content for the other fellow readers on various tech topics including React, HTML/CSS, JavaScript, Bootstrap, Tailwind, React MUI, etc."
            location="Freelance (Remote)"
          />
          <ListItem
            logo={guvi}
            title="Technical Content Writer"
            company="Guvi Geeks Pvt Ltd"
            date="Dec 2022 - Feb 2023"
            description="I have also worked Full time for Guvi as a Technical Writer where I have written technical blogs on the latest technologies and programming and technical semail campaigns."
            location="Full Time (Remote)"
          />

          <ListItem
            logo={cm}
            title="Technical Content Writer"
            company="Coding Minutes"
            date="Sep 2022 - Dec 2022"
            description="Coding Minutes was started with a mission to provide affordable & high quality education for everyone. With Udemy as our technology partner, we wish to bring all our courses with top-notch content to our students at pocket friendly prices with lifetime access."
            location="Internship (Remote)"
          />
          <ListItem
            logo={gssoc}
            title="Mentor"
            company="Girlscript Summer of Code"
            date="Feb 2022 - May 2022"
            description="Mentored students in Girlscript Summer of Code for Open Source project for Social Good. Reviewed various codes and GitHub repo’s of participants related to HTML/CSS, Bootstrap, and React etc."
            location="Remote"
          />
          <ListItem
            logo={gfg}
            title="Technical Content Writer"
            company="GeeksforGeeks"
            date="Oct 2020 - Aug 2021"
            description="Selected as the Geek of the Month for writing informational and quality articles throughout the month and also for publishing maximum no. of articles in a month. Written over 300+ Technical articles including React based frameworks, CSS based Frameworks & Libraries, and HTML/CSS & JS etc."
            location="Internship (Remote)"
          />
        </div>

        {/* )}
        </div> */}
      </div>
    </>
  );
}

export default Experience;
