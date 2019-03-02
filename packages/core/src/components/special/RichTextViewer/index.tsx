import { ApolloClient, gql } from "apollo-boost"
import React from "react"
import { withApollo } from "react-apollo"
import { Editor as CoreEditor, Value } from "slate"
import { Editor, RenderNodeProps } from "slate-react"
import { initialValue } from "./value"
import { getContent, getContentVariables } from "./__generated__/getContent"

interface State {
  value?: Value
  title?: string
  author?: string
}

interface RichTextViewerProps {
  onChange?: (value: Value) => void
  client: ApolloClient<any>
  contentId: string
  uriEndpoint?: string
}

class RichTextViewer extends React.Component<RichTextViewerProps, State> {
  public editor = React.createRef<Editor>()

  constructor(props: any) {
    super(props)
    this.state = {
      value: Value.fromJSON(initialValue)
    }
  }

  public retrieveContent = async (contentId: string) => {
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"
    const result = await this.props.client.query<
      getContent,
      getContentVariables
    >({
      query: GET_CONTENT,
      variables: {
        contentId
      },
      context: {
        uri: uriEndpoint
      }
    })

    const title = result.data.getContent.title
    const author = result.data.getContent.author
    const valueContent = Value.fromJSON(JSON.parse(result.data.getContent.content))

    this.setState({
      title: title,
      author: author,
      value: valueContent
    })
  }

  public ref = (editor: any) => {
    this.editor = editor
  }

  public componentDidMount = () => {
    this.retrieveContent(this.props.contentId)
  }


  public render() {
    return (
      <div>
        <div style={{fontSize: "2em"}}>{this.state.title}</div>
        <div style={{fontSize: "1.5em", color: "#555"}}>by {this.state.author}</div>
        <div style={{height: "1em"}}/>

        <Editor
          spellCheck
          autoFocus
          readOnly
          ref={this.editor}
          value={this.state.value}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
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

export const GET_CONTENT = gql`
  query getContent($contentId: String!) {
    getContent(contentId: $contentId) {
      id
      title
      author
      content
    }
  }
`

export default withApollo(RichTextViewer)
