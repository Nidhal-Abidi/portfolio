/** Src: https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/ */

import React from "react"

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: null, y: null })

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      // Change the origin from top-left to the center of the window
      setMousePosition({
        x: ev.clientX - window.innerWidth / 2,
        y: window.innerHeight / 2 - ev.clientY,
      })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
export default useMousePosition
