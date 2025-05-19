import LinkSvg from "../icons/link.svg?react";
export function Project({
  videoSrc,
  projURL,
  projName,
  projDescr,
  projYear,
  projTools,
}: {
  videoSrc: string;
  projURL: string;
  projName: string;
  projDescr: string;
  projYear: number;
  projTools: string[];
}) {
  return (
    <div className="project-container">
      <div className="video-container">
        <video
          src={videoSrc}
          muted={true}
          playsInline={true}
          onMouseEnter={(e) => {
            e.target.play();
          }}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.currentTime = 0;
          }}
        />
      </div>
      <a href={projURL} target="_blank" rel="noopener noreferrer">
        {projName}
        <span>
          <LinkSvg />
        </span>
      </a>
      <p className="proj-descr">{projDescr}</p>
      <div>
        <span>{projYear}</span>
        {projTools.length != 0
          ? projTools.map((tool, idx) => {
              return (
                <span key={idx} style={{ backgroundColor: "#ee9536" }}>
                  {tool}
                </span>
              );
            })
          : ""}
      </div>
    </div>
  );
}
