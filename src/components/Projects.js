import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Projects(props) {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                pinnedItems {
                  edges {
                    node {
                      description
                      forkCount
                      id
                      name
                      openGraphImageUrl
                      updatedAt(fromNow: true)
                      url
                      primaryLanguage {
                        name
                      }
                      languages {
                        nodes {
                          name
                        }
                      }
                      readme {
                        text
                      }
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const repos = data.allGithubData.nodes[0].data.user.pinnedItems.edges
  console.log(repos)

  return (
    <>
      <section className="mt-20 pb-20 lg:pb-0 relative block bg-teal-500">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
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
              className="text-teal-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Projects</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-teal-100">
                These are the projects I've decided to highlight from my Github
                Repo.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            {repos.map((repo, i) => {
              return (
                <div
                  data-aos="flip-up"
                  onClick={() => (window.location.href = repo.node.url)}
                  className="cursor-pointer my-6 mx-5 w-full lg:w-3/12 px-4"
                >
                  <div className="w-full h-full transition duration-500 text-center bg-white border-solid border-4 border-transparent transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-focus rounded-lg">
                    <h6 className="text-xl mt-5 font-semibold text-teal-500">
                      {repo.node.name}
                    </h6>
                    <p className="mt-2 mb-4 text-gray-500 hover:text-white">
                      <p key={repo.node.id} className="text-gray-500 px-4">
                        {repo.node.description}
                      </p>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
