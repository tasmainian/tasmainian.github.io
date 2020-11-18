import React from "react"
import { Link } from "gatsby"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container top-0 absolute px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="..."
              src={require("../assets/img/signature.png")}
              className="max-w-full mx-auto"
            />
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-white-800"
                      : "text-white-800 hover:text-white-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                  }
                  to="/#about"
                >
                  <i
                    className={
                      props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500"
                    }
                  />
                  <span className="inline-block ml-2 uppercase">About</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                  }
                  to="/#experience"
                >
                  <i
                    className={
                      props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500"
                    }
                  />
                  <span className="inline-block ml-2 uppercase">
                    Experience
                  </span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                  }
                  to="/#projects"
                >
                  <i
                    className={
                      props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500"
                    }
                  />
                  <span className="inline-block ml-2 uppercase">Projects</span>
                </Link>
              </li>

              {/* <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold"
                  }
                  to="/#contact"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500")
                    }
                  />
                  <span className="inline-block ml-2">Contact</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
