import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import resume from "../assets/pdf/resume.pdf"
export default function Header(props) {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "DSC_0532.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "95vh",
        }}
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-5s0 bg-black"
          >
            <Img
              fluid={data.image.childImageSharp.fluid}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain", filter: "brightness(50%)" }}
            />
          </span>
        </div>
        <div
          className="container relative mx-auto"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl uppercase">
                  <span className="text-teal-500">Tasmiha</span> HASSAN
                </h1>
                <p className="mt-4 text-lg text-gray-300 ">
                  Software Engineer | Full-Stack Developer
                </p>
                <a href={resume}>
                  <button href={resume} className="mt-4 bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
                    Resume
                  </button>
                </a>
                <div className="mt-6">
                  <a href="https://twitter.com/Tasmainian">
                    <button
                      className="bg-transparent hover:bg-gray-800 text-teal-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 p-2"
                      type="button"
                    >
                      <i className="fill-current fab fa-twitter fa-2x"></i>
                    </button>
                  </a>
                  <a href="https://www.facebook.com/htasmiha/">
                    <button
                      className="bg-transparent hover:bg-gray-800 text-teal-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 p-2"
                      type="button"
                      href="https://www.facebook.com/htasmiha/"
                    >
                      <i className="fill-current fab fa-facebook fa-2x"></i>
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/thas/">
                    <button
                      className="bg-transparent hover:bg-gray-800 text-teal-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 p-2"
                      type="button"
                      href="https://www.linkedin.com/in/thas/"
                    >
                      <i className="fill-current fab fa-linkedin-in fa-2x"></i>
                    </button>
                  </a>
                  <a href="https://github.com/tasmainian">
                    <button
                      className="bg-transparent hover:bg-gray-800 text-teal-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 p-2"
                      type="button"
                      href="https://github.com/tasmainian"
                    >
                      <i className="fill-current fab fa-github fa-2x"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  )
}
