import "./App.css"
import { useEffect, useState } from "react"
import { AvatarContainer } from "./components/AvatarContainer"

/* Importing SVGs: Remove 'height' & 'width' from svg file + set fill to "currentColor" */
import EmailSvg from "./icons/email.svg?react"
import LinkedInSvg from "./icons/linkedin.svg?react"
import GithubSvg from "./icons/github.svg?react"
import ToDarkModeSvg from "./icons/switch_to_dark_mode.svg?react"
import ToLightModeSvg from "./icons/switch_to_light_mode.svg?react"

import { ProjectGrid } from "./components/ProjectsGrid"
import { ChatBot } from "./components/ChatBot"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [isDarkTheme])

  useEffect(() => {
    console.log("Nidhal Labidi | Software Engineer")
  }, [])

  return (
    <>
      <header>
        <h1>Nidhal Labidi</h1>
        <button
          className="header-btn"
          onClick={() => setIsDarkTheme((prevVal) => !prevVal)}
        >
          {isDarkTheme ? (
            <span className="icon">
              <ToLightModeSvg />
            </span>
          ) : (
            <span className="icon">
              <ToDarkModeSvg />
            </span>
          )}
        </button>
      </header>
      <main>
        <div className="container-info-avatar">
          <div className="container-info">
            <div className="container-introduction">
              <h2>Software Engineer</h2>
              <p>
                From understanding problems to building solutions, my journey is
                all about making an impact.
              </p>
              <p>Interested in my work? Lets connect!</p>
            </div>
            <div className="container-socials">
              <p>Socials</p>
              <div className="wrapper">
                <a
                  href="https://github.com/Nidhal-Abidi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <GithubSvg />
                  </span>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nidhalabidi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <LinkedInSvg />
                  </span>
                  LinkedIn
                </a>
                <a href="mailto:labidinidhal23@gmail.com">
                  <span>
                    <EmailSvg />
                  </span>
                  Email
                </a>
              </div>
            </div>
            <div className="container-toolset">
              <p>Toolset</p>
              <div className="wrapper">
                <div className="chip chip-orange">Javascript(ES6)</div>
                <div className="chip chip-orange">PHP</div>
                <div className="chip chip-orange">C++</div>
                <div className="chip chip-orange">Java</div>

                <div className="chip chip-green">HTML5</div>
                <div className="chip chip-green">CSS3</div>
                <div className="chip chip-green">React</div>
                <div className="chip chip-green">Laravel</div>
                <div className="chip chip-green">Node.js</div>
                <div className="chip chip-green">Express.js</div>

                <div className="chip chip-blue">Git</div>
                <div className="chip chip-blue">Linux/Unix</div>
                <div className="chip chip-blue">UML</div>

                <div className="chip chip-purple">RESTful APIs</div>
                <div className="chip chip-purple">MySQL</div>
                <div className="chip chip-purple">MongoDB</div>
                <div className="chip chip-purple">PL/SQL</div>

                <div className="chip chip-dark-pink">Material UI</div>
                <div className="chip chip-dark-pink">Bootstrap</div>
                <div className="chip chip-dark-pink">Figma</div>
              </div>
            </div>
          </div>
          <div className="container-chat-avatar">
            <AvatarContainer isDarkTheme={isDarkTheme} />
            <ChatBot />
          </div>
        </div>
        <div className="container-personal-projs">
          <p>Personal</p>
          <ProjectGrid />
        </div>
      </main>

      <footer>
        <div>© Copyright 2024 Nidhal Labidi</div>
        <div>Built with Three.js and React</div>
        <div>
          Model created with{" "}
          <a
            href="https://readyplayer.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            readyplayer.me
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
