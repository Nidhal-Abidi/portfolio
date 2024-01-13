import { useEffect, useState } from "react"
import "./App.css"
import { AvatarContainer } from "./components/AvatarContainer"

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
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
            <img
              className="icon"
              src="/icons/switch_to_light_mode.svg"
              alt="to light mode icon"
            />
          ) : (
            <img
              className="icon"
              src="icons/switch_to_dark_mode.svg"
              alt="to dark mode icon"
            />
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
                <a href="https://github.com/Nidhal-Abidi">
                  <img src="/icons/github.svg" alt="git" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/nidhalabidi/">
                  <img src="/icons/linkedin.svg" alt="linkedin" />
                  LinkedIn
                </a>
                <a href="mailto:labidinidhal23@gmail.com">
                  <img src="/icons/email.svg" alt="email" />
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
          <AvatarContainer isDarkTheme={isDarkTheme} />
        </div>
        <div className="container-personal-projs">
          <p>Personal</p>
          <div className="wrapper">
            {/** First proj */}
            <div className="project-container">
              <div className="video-container">
                <video src="#"></video>
              </div>
              <a
                href="https://nidhal-abidi.github.io/MazeMaster/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MazeMaster
                <img src="/icons/link.svg" alt="link-svg" />
              </a>
              <p>
                An audible and visual representation of some pathfinding
                algorithms (Dijkstra, A*, DFS, BFS).
              </p>
              <div>
                <span>2024</span>
                <span style={{ backgroundColor: "#ee9536" }}>React</span>
                <span style={{ backgroundColor: "#ee9536" }}>
                  Web Audio API
                </span>
              </div>
            </div>

            {/** Second proj */}
            <div className="project-container">
              <div className="video-container">
                <video src="#"></video>
              </div>
              <a
                href="https://nidhal-abidi.github.io/AlgoAnimation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sorting Orchestra
                <img src="/icons/link.svg" alt="link-svg" />
              </a>
              <p>
                Representing Insertion, Bubble and Selection sort using
                animations and sounds.
              </p>
              <div>
                <span>2023</span>
                <span style={{ backgroundColor: "#ee9536" }}>React</span>
                <span style={{ backgroundColor: "#ee9536" }}>
                  Web Audio API
                </span>
              </div>
            </div>

            {/** Third proj */}
            <div className="project-container">
              <div className="video-container">
                <video src="#"></video>
              </div>
              <a
                href="https://github.com/Nidhal-Abidi/reddit_clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                CommunityPost <img src="/icons/link.svg" alt="link-svg" />
              </a>
              <p>
                A website that manages posts and users (all CRUD operations)
                using React-router-dom and JSON server.
              </p>
              <div>
                <span>2023</span>
                <span style={{ backgroundColor: "#ee9536" }}>React</span>
              </div>
            </div>

            {/** Fourth project */}
            <div className="project-container">
              <div className="video-container">
                <video src="#"></video>
              </div>
              <a
                href="https://youtu.be/6IWqaNgcnCs"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Network <img src="/icons/link.svg" alt="link-svg" />
              </a>
              <p>
                Web app that allows information sharing between staff, teachers,
                parents, and students in the context of a high school.
              </p>
              <div>
                <span>2021</span>
                <span style={{ backgroundColor: "#ee9536" }}>Laravel</span>
                <span style={{ backgroundColor: "#ee9536" }}>PHP</span>
              </div>
            </div>

            {/** Fifth project */}
            <div className="project-container">
              <div className="video-container">
                <video src="#"></video>
              </div>
              <a
                href="https://youtu.be/qlmPrDkBDAM"
                target="_blank"
                rel="noopener noreferrer"
              >
                LAcademy <img src="/icons/link.svg" alt="link-svg" />
              </a>
              <p>
                Web app that allows information sharing between staff, teachers,
                parents, and students in the context of a high school.
              </p>
              <div>
                <span>2020</span>
                <span style={{ backgroundColor: "#ee9536" }}>PHP</span>
                <span style={{ backgroundColor: "#ee9536" }}>Bootstrap</span>
              </div>
            </div>
          </div>
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
