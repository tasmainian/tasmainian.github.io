import React from "react";
import { useStaticQuery } from "gatsby"

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
        <section className="pb-20 mt-20 relative block bg-teal-500">
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
                <h2 className="text-4xl font-semibold text-white">
                  Projects
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-teal-100">
                  These are the projects I have pinned from my Github repository.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
            {
                  repos.map((repo, i) => {
                      return (
                        <div data-aos="flip-up" className="my-5 mx-5 w-full lg:w-3/12 px-4 text-center bg-white hover:bg-gray-500 shadow-lg rounded-lg">
                          <h6 className="text-xl mt-5 font-semibold text-white">
                            Excelent Services
                          </h6>
                          <p className="mt-2 mb-4 text-gray-500 hover:text-white">
                            <li key={repo.node.id} className="text-gray-500" onClick={() => window.location.href=repo.node.url}>{repo.node.name}: {repo.node.description}</li>
  
                          </p>
                        </div>
                      )
                  })
                }

              {/* <ul>
                {
                  repos.map(repo =>
                    <li key={repo.id} className="text-teal-100">{repo.name}: {repo.description}</li>
                  )
                }
              </ul> */}
            </div>
          </div>
    </section>
    </>
  );
}
