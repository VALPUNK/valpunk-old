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
                text: "...",
                object: "leaf"
              },
            ]
          }
        ]
      },
    ]
  }
}
