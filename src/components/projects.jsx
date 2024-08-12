import React from "react"

export default function Projects(props) {
  return (
    <div className="w-full " data-aos="flip-left" data-aos-duration="1000">
      <div className="bg-element h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group ">
        <img src={props.img} alt="" />
        <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
          <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
            <div className="bg-white rounded-full px-5 inline-block mb-2 ">
              <h4 className="text-gradient">{props.type}</h4>
            </div>
            <p className="hidden sm:block text-sm">{props.desc}</p>
            <a
              href={props.link}
              className="bg-white rounded-full px-5 inline-block my-2 text-black font-bold"
              target="_blank"
              rel="noreferrer"
            >
              To Link...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
