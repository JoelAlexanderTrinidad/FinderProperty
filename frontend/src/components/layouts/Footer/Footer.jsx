
export const Footer = () => {
  return (
    <footer className="">
        <div className=" bg-amber-100 flex flex-col items-center justify-evenly h-48 lg:px-24 lg:flex-row">
            <span className="text-sm px-10 sm:text-center">© 2023 Joel Alexander Trinidad | FullStack web developer.
            </span>
            <div className="flex mt-4 space-x-2 lg:space-x-5 sm:justify-center md:mt-0">
                <a href="https://www.linkedin.com/in/joel-trinidad/" target="__blanck" className="text-gray-400 hover:text-gray-900 ">
                      <i className="fab fa-linkedin"></i>
                      <span className="sr-only">Linkedin</span>
                  </a>
                  <a href="https://github.com/JoelAlexanderTrinidad" target="__blank" className="text-gray-400 hover:text-gray-900 ">
                      <i className="fab fa-github"></i>
                      <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className="flex items-center">
                      <i className="fas fa-envelope"></i>
                      <p className="ps-2">joelalexandertrinidad@gmail.com</p>
                  </a>
            </div>
          </div>
    </footer>
  )
}
