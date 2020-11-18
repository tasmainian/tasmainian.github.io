import React from "react"

export default function ExperienceCard(props) {
  const { experience } = props
  return (
    <>
      <div className="container mx-auto flex content-center items-center justify-center">
        <div className="w-4/6 rounded border-2 border-gray-200 overflow-hidden shadow-lg">
          <div className="md:flex bg-white rounded-lg p-6">
            <img
              className="h-16 w-16 md:h-24 md:w-24 mx-auto md:mx-0 md:mr-6"
              alt=""
              src={require("../assets/img/" + experience.image)}
            />
            <div className="text-center md:text-left w-4/12">
              <h2 className="text-lg">{experience.company}</h2>
              <div className="text-gray-600 text-xs">{experience.location}</div>
              <div className="text-teal-500">{experience.position}</div>
              <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mt-2 last:mr-0 mr-1">
                {experience.type}
              </div>
              <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 last:mr-0 mr-1">
                {experience.range}
              </div>
            </div>
            <div className="border-l-2 mx-2 border-teal-300 text-center md:text-left w-8/12">
              <div className="ml-2">
                <ul className="ml-4 list-square">
                  {experience.roles.map(e => {
                    return (
                      <div className="text-gray-600 text-sm">
                        {/* <i className="fas text-teal-400 mr-1 fa-terminal"></i> */}
                        <li className="ml-2">{e}</li>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
