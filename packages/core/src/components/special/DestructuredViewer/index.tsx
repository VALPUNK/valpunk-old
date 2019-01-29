import React from "react"
import { Editor as CoreEditor, Value } from "slate"
import { Editor, RenderNodeProps } from "slate-react"

interface RichTextViewerProps {
  value?: Value
}

class DestructuredViewer extends React.Component<RichTextViewerProps> {
  public editor = React.createRef<Editor>()

  public render() {
    return (
      <div>
        <Editor
          readOnly
          ref={this.editor}
          value={this.props.value}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          style={{ maxWidth: 1000, minWidth: 800 }}
        />
      </div>
    )
  }

  public renderNode = (
    props: RenderNodeProps,
    _editor: CoreEditor,
    next: () => any
  ) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case "block-quote":
        return <blockquote {...attributes}>{children}</blockquote>
      case "bulleted-list":
        return <ul {...attributes}>{children}</ul>
      case "heading-one":
        return <h1 {...attributes}>{children}</h1>
      case "heading-two":
        return <h2 {...attributes}>{children}</h2>
      case "list-item":
        return <li {...attributes}>{children}</li>
      case "numbered-list":
        return <ol {...attributes}>{children}</ol>
      default:
        return next()
    }
  }

  /**
   * Render a Slate mark.
   *
   * @param {Object} props
   * @return {Element}
   */

  public renderMark = (props: any, _editor: CoreEditor, next: any) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case "bold":
        return <strong {...attributes}>{children}</strong>
      case "code":
        return <code {...attributes}>{children}</code>
      case "italic":
        return <em {...attributes}>{children}</em>
      case "underlined":
        return <u {...attributes}>{children}</u>
      default:
        return next()
    }
  }
}

export default DestructuredViewer
