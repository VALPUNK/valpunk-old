import { TextField } from "@material-ui/core"
import Code from "@material-ui/icons/Code"
import FormatBold from "@material-ui/icons/FormatBold"
import FormatItalic from "@material-ui/icons/FormatItalic"
import FormatListBulleted from "@material-ui/icons/FormatListBulleted"
import FormatListNumbered from "@material-ui/icons/FormatListNumbered"
import FormatQuote from "@material-ui/icons/FormatQuote"
import FormatUnderlined from "@material-ui/icons/FormatUnderlined"
import LooksOne from "@material-ui/icons/LooksOne"
import LooksTwo from "@material-ui/icons/LooksTwo"
import { ApolloClient, gql } from "apollo-boost"
import { isKeyHotkey } from "is-hotkey"
import React from "react"
import { withApollo } from "react-apollo"
import { Editor as CoreEditor, Value } from "slate"
import { Editor, RenderNodeProps } from "slate-react"
import { BusinessType } from "../../../../__generated__/globalTypes"
import { GET_CONTENT } from "../RichTextViewer"
import {
  getContent,
  getContentVariables
} from "../RichTextViewer/__generated__/getContent"
import { Button, Icon, Toolbar } from "./components"
import { initialValue } from "./value"
import {
  createOrConnectContent,
  createOrConnectContentVariables
} from "./__generated__/createOrConnectContent"

const DEFAULT_NODE = "paragraph"

const isBoldHotkey = isKeyHotkey("mod+b")
const isItalicHotkey = isKeyHotkey("mod+i")
const isUnderlinedHotkey = isKeyHotkey("mod+u")
const isCodeHotkey = isKeyHotkey("mod+`")

interface State {
  value?: Value
  title?: string
  author?: string
  contentId?: string
  submitting?: boolean
}

export interface RichTextEditorProps {
  onChange?: (value: Value) => void
  client: ApolloClient<any>
  businessType: BusinessType
  uriEndpoint?: string
  contentId?: string
}

class RichTextEditor extends React.Component<RichTextEditorProps, State> {
  public editor = React.createRef<Editor>()

  constructor(props: any) {
    super(props)
    this.state = {
      value: Value.fromJSON(initialValue),
      title: "",
      author: "",
      contentId: this.props.contentId ? this.props.contentId : "",
      submitting: false
    }
  }

  public componentDidMount = () => {
    {
      this.props.contentId && this.retrieveContent(this.props.contentId)
    }
  }

  public retrieveContent = async (contentId: string) => {
    // console.log("Getting Content...")
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
    const valueContent = Value.fromJSON(
      JSON.parse(result.data.getContent.content)
    )

    this.setState({
      title: title,
      author: author,
      value: valueContent
    })
    // console.log(this.state)
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  public hasMark = (type: any) => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  public hasBlock = (type: string) => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  }

  /**
   * Store a reference to the `editor`.
   *
   * @param {Editor} editor
   */

  public ref = (editor: any) => {
    this.editor = editor
  }

  /**
   * Render.
   *
   * @return {Element}
   */

  public render() {
    return (
      <div>
        <div style={{margin: "20px 0"}}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.onChangeField}
            style={{width: "100%"}}
          />
        </div>
        <div style={{margin: "20px 0"}}>
          <TextField
            name="author"
            label="Author"
            variant="outlined"
            value={this.state.author}
            onChange={this.onChangeField}
          />
        </div>

        <div style={{ margin: "30px 0" }}>
          <Toolbar>
            {this.renderMarkButton("bold", <FormatBold/>)}
            {/* <FormatBold
              onClick={e => {
                e.preventDefault()
                this.onClickMark(e, "bold")
              }}
            /> */}
            {this.renderMarkButton("italic", <FormatItalic/>)}
            {/* <FormatItalic
              onClick={e => {
                e.preventDefault()
                this.onClickMark(e, "italic")
              }}
            /> */}
            {this.renderMarkButton("underlined", <FormatUnderlined/>)}
            {/* <FormatUnderlined
              onClick={e => {
                e.preventDefault()
                this.onClickMark(e, "underlined")
              }}
            /> */}
            {this.renderMarkButton("code", <Code/>)}
            {/* <Code
              onClick={e => {
                e.preventDefault()
                this.onClickMark(e, "code")
              }}
            /> */}
            {this.renderBlockButton("heading-one", <LooksOne/>)}
            {/* <LooksOne
              onClick={e => {
                e.preventDefault()
                this.onClickBlock(e, "heading-one")
              }}
            /> */}
            {this.renderBlockButton("heading-two", <LooksTwo/>)}
            {/* <LooksTwo
              onClick={e => {
                e.preventDefault()
                this.onClickBlock(e, "heading-two")
              }}
            /> */}
            {this.renderBlockButton("block-quote", <FormatQuote/>)}
            {/* <FormatQuote
              onClick={e => {
                e.preventDefault()
                this.onClickBlock(e, "block-quote")
              }}
            /> */}
            {this.renderBlockButton("numbered-list", <FormatListNumbered/>)}
            {/* <FormatListNumbered
              onClick={e => {
                e.preventDefault()
                this.onClickBlock(e, "numbered-list")
              }}
            /> */}
            {this.renderBlockButton("bulleted-list", <FormatListBulleted/>)}
            {/* <FormatListBulleted
              onClick={e => {
                e.preventDefault()
                this.onClickBlock(e, "bulleted-list")
              }}
            /> */}
          </Toolbar>
          <div
            style={{
              border: "2px solid #eee",
              padding: "20px 20px"
            }}
          >
            <Editor
              spellCheck
              autoFocus
              placeholder="Enter some rich text..."
              ref={this.editor}
              value={this.state.value}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              renderNode={this.renderNode}
              renderMark={this.renderMark}
              style={{ maxWidth: 1000, minWidth: 800 }}
            />
          </div>
        </div>

        <div
          style={{
            paddingTop: "20px"
          }}
        >
          <Button
            style={{
              backgroundColor: this.state.submitting ? "#ddd" : "#2196f3",
              color: "white",
              padding: "10px",
              borderRadius: "4px"
            }}
            onClick={e => {
              e.preventDefault()
              this.onClickSave()
            }}
          >
            Save
          </Button>
        </div>
      </div>
    )
  }

  /**
   * Render a mark-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  public renderMarkButton = (type: string, icon: any) => {
    const isActive = this.hasMark(type)

    return (
      <Button
        active={isActive}
        style={{ cursor: "pointer" }}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  /**
   * Render a block-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  public renderBlockButton = (type: string, icon: any) => {
    let isActive = this.hasBlock(type)

    if (["numbered-list", "bulleted-list"].includes(type)) {
      const {
        value: { document, blocks }
      } = this.state

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key)
        // @ts-ignore
        isActive = this.hasBlock("list-item") && parent && parent.type === type
      }
    }

    return (
      <Button
        active={isActive}
        style={{ cursor: "pointer" }}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    )
  }

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @return {Element}
   */

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

  /**
   * On change, save the new `value`.
   *
   * @param {Editor} editor
   */

  public onChange = ({ value }: Editor) => {
    this.setState({
      value
    })
    if (this.props.onChange) {
      this.props.onChange(this.state.value)
    }
  }

  public onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  public onClickSave = async () => {
    // console.log("Submitting...")
    await this.setState({
      submitting: true
    })
    const saveContent = JSON.stringify(this.state.value.toJSON())
    const contentId = this.state.contentId
    const uriEndpoint = this.props.uriEndpoint
      ? this.props.uriEndpoint
      : "https://valpunk-server.now.sh/"
    const result = await this.props.client.mutate<
      createOrConnectContent,
      createOrConnectContentVariables
    >({
      mutation: SAVE_CONTENT,
      variables: {
        title: this.state.title,
        author: this.state.author,
        content: saveContent,
        contentId: contentId,
        accountId: "",
        businessType: this.props.businessType
      },
      context: {
        uri: uriEndpoint
      }
    })

    // console.log("Just saved all this stuff: ", result)

    this.props.contentId
      ? {}
      : this.setState({
          contentId: result.data.createOrConnectContent.id
        })

    await this.setState({
      submitting: false
    })

    console.log("Content Saved.")
  }

  /**
   * On key down, if it's a formatting command toggle a mark.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @return {Change}
   */

  public onKeyDown = (
    event: KeyboardEvent,
    editor: CoreEditor,
    next: () => any
  ) => {
    let mark

    if (isBoldHotkey(event)) {
      mark = "bold"
    } else if (isItalicHotkey(event)) {
      mark = "italic"
    } else if (isUnderlinedHotkey(event)) {
      mark = "underlined"
    } else if (isCodeHotkey(event)) {
      mark = "code"
    } else {
      return next()
    }

    event.preventDefault()
    editor.toggleMark(mark)
  }

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} event
   * @param {String} type
   */

  public onClickMark = (event: React.MouseEvent, type: string) => {
    event.preventDefault()
    this.editor.current.toggleMark(type)
  }

  /**
   * When a block button is clicked, toggle the block type.
   *
   * @param {Event} event
   * @param {String} type
   */

  public onClickBlock = (event: React.MouseEvent, type: string) => {
    event.preventDefault()

    const { value } = this.editor.current
    const { document } = value

    // Handle everything but list buttons.
    if (type !== "bulleted-list" && type !== "numbered-list") {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock("list-item")

      if (isList) {
        this.editor.current
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list")
      } else {
        this.editor.current.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock("list-item")
      const isType = value.blocks.some(block => {
        // @ts-ignore
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        this.editor.current
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list")
      } else if (isList) {
        this.editor.current
          .unwrapBlock(
            type === "bulleted-list" ? "numbered-list" : "bulleted-list"
          )
          .wrapBlock(type)
      } else {
        this.editor.current.setBlocks("list-item").wrapBlock(type)
      }
    }
  }
}

/**
 * Export.
 */

export const SAVE_CONTENT = gql`
  mutation createOrConnectContent(
    $title: String
    $author: String
    $content: String!
    $contentId: String
    $accountId: String
    $businessType: BusinessType!
  ) {
    createOrConnectContent(
      title: $title
      author: $author
      content: $content
      contentId: $contentId
      accountId: $accountId
      businessType: $businessType
    ) {
      id
      content
    }
  }
`

export default withApollo(RichTextEditor)
