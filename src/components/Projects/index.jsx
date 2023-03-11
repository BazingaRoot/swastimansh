import React, { useState } from "react";
import img1 from "../../assets/images/physio1.jpg";
import img2 from "../../assets/images/physio2.jpg";
import img3 from "../../assets/images/physio3.jpg";
import img4 from "../../assets/images/physio4.jpg";
import img5 from "../../assets/images/physio5.jpg";
import img6 from "../../assets/images/physio6.jpg";

import vid1 from "../../assets/videos/vid1.mp4";
import vid2 from "../../assets/videos/vid2.mp4";
import vid3 from "../../assets/videos/vid3.mp4";

import "../../style.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];

  const vids = [
    {
      id: 'vid1',
      vid: vid1
    },
    {
      id: 'vid2',
      vid: vid2
    },
    {
      id: 'vid3',
      vid: vid3
    },
  ]

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-center text-4xl font-bold py-6">Services</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        Comprehensive Rehabilitation Services: Regain Strength, Mobility, and Function with Our Physiotherapy
        </p>
        <div className=" mt-12 mb-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => setDurum(1)}
            className={`text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Physiotherapy Consultation
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Maternity Fitness Sessions
          </button>
          <button
            onClick={() => setDurum(3)}
            className={` text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            General Fitness Sessions
          </button>
          <button
            onClick={() => setDurum(4)}
            className={` text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px]  ${
              durum === 4 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Face Yoga sessions
          </button>
          <button
            onClick={() => setDurum(5)}
            className={` text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px]  ${
              durum === 5 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Post COVID Rehabilitation
          </button>
          <button
            onClick={() => setDurum(6)}
            className={` text-[16px] border-1  bg-[#171717] rounded-[6px] p-[5px]  ${
              durum === 6 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Diet & Nutrition
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente.
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {durum === 3 ? vids.map((item, i) => <ProjectCard key={i} item={item} type="video" />)
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;

