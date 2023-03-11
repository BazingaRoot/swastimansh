import React from 'react'

// eslint-disable-next-line react/prop-types
function ProjectCard({item, type}) {
  return (
    <>
      <div className="img-box w-[300px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        {type === 'video' ?
        <video controls controlsList="nodownload noremoteplayback" disablePictureInPicture={true} src={item.vid} /> : 
        <img src={item.img} alt="" className='w-full' /> }
        {/* <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div> */}
      </div>
    </>
  )
}

export default ProjectCard