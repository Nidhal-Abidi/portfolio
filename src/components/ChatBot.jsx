import { useState } from "react"

const INITIAL_CHOICES = [
  {
    id: "intro",
    question: "Tell me about yourself 💬",
    response:
      "I'm Nidhal. I am a student at University of Passau studying computer science. I am currently working on a few projects, including this one!",
    isClicked: false,
  },
  {
    id: "hobbies",
    question: "Any hobbies 🏖️",
    response:
      "Outside of work, I enjoy playing football, spending time with my family and cycling.",
    isClicked: false,
  },
]

const INITIAL_PREV_CHOICES = [
  {
    content: "Hey there!",
    isUserQ: false,
  },
  {
    content: "What would you like me to do? 🪄",
    isUserQ: false,
  },
]

export function ChatBot() {
  const [choices, setChoices] = useState(INITIAL_CHOICES)

  const [prevChoices, setPrevChoices] = useState(INITIAL_PREV_CHOICES)

  function removeElt(arr, elt) {
    return arr.filter((val) => {
      if (val.id !== elt.id) return true
      else return false
    })
  }

  return (
    <div id="chat" className="messages">
      {prevChoices.map((choice, idx) => {
        return (
          <div
            key={idx}
            className={`message ${choice.isUserQ ? "" : "sender"}`}
          >
            {choice.content}
          </div>
        )
      })}
      {
        <div className="choices">
          {choices.length !== 0 ? (
            choices.map((choice, idx) => {
              return (
                <div
                  key={idx}
                  className="choice"
                  onClick={() => {
                    setChoices((prevArr) => removeElt(prevArr, choice))
                    setPrevChoices((prevArr) => [
                      ...prevArr,
                      { content: choice.question, isUserQ: true },
                      { content: choice.response, isUserQ: false },
                    ])
                  }}
                >
                  {choice.question}
                </div>
              )
            })
          ) : (
            <div
              className="restart-conversation"
              onClick={() => {
                setChoices(INITIAL_CHOICES)
                setPrevChoices(INITIAL_PREV_CHOICES)
              }}
            >
              Restart Conversation 🔁
            </div>
          )}
        </div>
      }

      {/* <div className="message">
        <div className="typing typing-1"></div>
        <div className="typing typing-2"></div>
        <div className="typing typing-3"></div>
      </div> */}
    </div>
  )
}