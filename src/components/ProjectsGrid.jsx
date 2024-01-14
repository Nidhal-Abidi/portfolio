import mazeMasterClip from "/assets/mazemaster.mp4"
import sortingOrchestraClip from "/assets/sorting_orchestra.mp4"
import communityPostClip from "/assets/communityPost.mp4"
import schoolNetworkClip from "/assets/school-network.mp4"
import lacademyClip from "/assets/lacademy.mp4"
import { Project } from "./Project"

export function ProjectGrid() {
  let projDetails = [
    {
      projId: 1,
      videoSrc: mazeMasterClip,
      projURL: "https://nidhal-abidi.github.io/MazeMaster/",
      projName: "Maze Master",
      projDescr:
        "An audible and visual representation of some pathfinding algorithms (Dijkstra, A*, DFS, BFS).",
      projYear: 2024,
      projTools: ["React", "Web Audio API"],
    },
    {
      projId: 2,
      videoSrc: sortingOrchestraClip,
      projURL: "https://nidhal-abidi.github.io/AlgoAnimation/",
      projName: "Sorting Orchestra",
      projDescr:
        "Representing Insertion, Bubble and Selection sort using animations and sounds.",
      projYear: 2023,
      projTools: ["React", "Web Audio API"],
    },
    {
      projId: 3,
      videoSrc: communityPostClip,
      projURL: "https://github.com/Nidhal-Abidi/reddit_clone",
      projName: "CommunityPost",
      projDescr:
        "A website that manages posts and users (all CRUD operations) using React-router-dom and JSON server.",
      projYear: 2023,
      projTools: ["React"],
    },
    {
      projId: 4,
      videoSrc: schoolNetworkClip,
      projURL: "https://youtu.be/6IWqaNgcnCs",
      projName: "School Network",
      projDescr:
        "Web app that allows information sharing between staff, teachers, parents, and students in the context of a high school.",
      projYear: 2021,
      projTools: ["Laravel", "PHP"],
    },
    {
      projId: 5,
      videoSrc: lacademyClip,
      projURL: "https://youtu.be/qlmPrDkBDAM",
      projName: "LAcademy",
      projDescr:
        "Web app that allows users to learn different topics (computer science, languages and engineering).",
      projYear: 2020,
      projTools: ["PHP", "Bootstrap"],
    },
  ]

  return (
    <div className="wrapper">
      {projDetails.map((proj) => {
        return <Project key={proj.projId} {...proj} />
      })}
    </div>
  )
}
