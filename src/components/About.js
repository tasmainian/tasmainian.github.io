import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function About(props) {
  const data = useStaticQuery(graphql`
    query ProfilePic {
      image: file(relativePath: { eq: "me.jpg" }) {
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
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div
              className="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <Img
                fluid={data.image.childImageSharp.fluid}
                style={{ height: "100%", width: "100%" }}
                imgStyle={{
                  objectFit: "contain",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              />

              {/* <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require("../assets/img/me.jpg")}
                /> */}
            </div>
            <div
              className="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-center">About Me</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  My name is{" "}
                  <span className=" text-teal-500">Tasmiha Hassan</span>. I am
                  an aspiring{" "}
                  <span className=" text-teal-500">Software Developer</span> who
                  has experience building Web and Mobile applications using{" "}
                  <span className=" text-teal-500">Spring MVC</span> /{" "}
                  <span className=" text-teal-500">Reactjs</span> /{" "}
                  <span className=" text-teal-500">Nodejs</span> /{" "}
                  <span className=" text-teal-500">React Native</span>. I am
                  majoring in
                  <span className=" text-teal-500">
                    {" "}
                    Software Engineering
                  </span>{" "}
                  at McMaster University and looking foward to graduating with
                  the class of 2021!
                </p>

                {/* <ul className="list-none mt-1">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-500 bg-teal-200 mr-3">
                          <i className="fab fa-leanpub"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Always eager to learn more
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-500 bg-teal-200  mr-3">
                          <i className="far fa-smile"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                              Love meeting new people and building connections
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
