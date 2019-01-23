import { ValueJSON } from "slate"

export const initialValue: ValueJSON = {
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "This is editable ",
                object: "leaf"
              },
              {
                text: "rich",
                marks: [
                  {
                    type: "bold",
                    object: "mark"
                  }
                ],
                object: "leaf"
              },
              {
                text: " text, ",
                object: "leaf"
              },
              {
                text: "much",
                marks: [
                  {
                    type: "italic",
                    object: "mark"
                  }
                ],
                object: "leaf"
              },
              {
                text: " better than a ",
                object: "leaf"
              },
              {
                text: "<textarea>",
                marks: [
                  {
                    type: "code",
                    object: "mark"
                  }
                ],
                object: "leaf"
              },
              {
                text: "!",
                object: "leaf"
              }
            ]
          }
        ]
      },
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text:
                  "Since it's rich text, you can do things like turn a selection of text ",
                object: "leaf"
              },
              {
                text: "bold",
                marks: [
                  {
                    type: "bold",
                    object: "mark"
                  }
                ],
                object: "leaf"
              },
              {
                text:
                  ", or add a semantically rendered block quote in the middle of the page, like this:",
                object: "leaf"
              }
            ]
          }
        ]
      },
      {
        object: "block",
        type: "block-quote",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A wise quote.",
                object: "leaf"
              }
            ]
          }
        ]
      },
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Try it out for yourself!",
                object: "leaf"
              }
            ]
          }
        ]
      }
    ]
  }
}
