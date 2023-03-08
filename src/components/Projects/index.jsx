import React, { useState } from "react";
import img1 from "../../assets/images/project-img1.png";
import img2 from "../../assets/images/project-img1.png";
import img3 from "../../assets/images/project-img1.png";

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
      img: img2,
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Services</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        Comprehensive Rehabilitation Services: Regain Strength, Mobility, and Function with Our Physiotherapy
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
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
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
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
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi.
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;

