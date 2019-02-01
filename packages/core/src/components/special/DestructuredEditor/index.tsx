import Code from "@material-ui/icons/Code"
import FormatBold from "@material-ui/icons/FormatBold"
import FormatItalic from "@material-ui/icons/FormatItalic"
import FormatListBulleted from "@material-ui/icons/FormatListBulleted"
import FormatListNumbered from "@material-ui/icons/FormatListNumbered"
import FormatQuote from "@material-ui/icons/FormatQuote"
import FormatUnderlined from "@material-ui/icons/FormatUnderlined"
import LooksOne from "@material-ui/icons/LooksOne"
import LooksTwo from "@material-ui/icons/LooksTwo"
import { isKeyHotkey } from "is-hotkey"
import React from "react"
import { Editor as CoreEditor, Value } from "slate"
import { Editor, RenderNodeProps } from "slate-react"
import { Button, Icon, Toolbar } from "./components"

const DEFAULT_NODE = "paragraph"

const isBoldHotkey = isKeyHotkey("mod+b")
const isItalicHotkey = isKeyHotkey("mod+i")
const isUnderlinedHotkey = isKeyHotkey("mod+u")
const isCodeHotkey = isKeyHotkey("mod+`")

interface RichTextEditorProps {
  onChange: (value: Value) => void
  value: Value
}

class DestructuredEditor extends React.Component<RichTextEditorProps> {
  public editor = React.createRef<Editor>()

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  public hasMark = (type: any) => {
    const { value } = this.props
    return value.activeMarks.some(mark => mark.type === type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  public hasBlock = (type: string) => {
    const { value } = this.props
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
        <Toolbar>
          {this.renderMarkButton("bold", <FormatBold />)}

          {this.renderMarkButton("italic", <FormatItalic />)}

          {this.renderMarkButton("underlined", <FormatUnderlined />)}

          {this.renderMarkButton("code", <Code />)}

          {this.renderBlockButton("heading-one", <LooksOne />)}

          {this.renderBlockButton("heading-two", <LooksTwo />)}

          {this.renderBlockButton("block-quote", <FormatQuote />)}

          {this.renderBlockButton("numbered-list", <FormatListNumbered />)}

          {this.renderBlockButton("bulleted-list", <FormatListBulleted />)}

          {/* <FormatBold
            onClick={e => {
              e.preventDefault()
              this.onClickMark(e, "bold")
            }}
          />
          <FormatItalic
            onClick={e => {
              e.preventDefault()
              this.onClickMark(e, "italic")
            }}
          />
          <FormatUnderlined
            onClick={e => {
              e.preventDefault()
              this.onClickMark(e, "underlined")
            }}
          />
          <Code
            onClick={e => {
              e.preventDefault()
              this.onClickMark(e, "code")
            }}
          />
          <LooksOne
            onClick={e => {
              e.preventDefault()
              this.onClickBlock(e, "heading-one")
            }}
          />
          <LooksTwo
            onClick={e => {
              e.preventDefault()
              this.onClickBlock(e, "heading-two")
            }}
          />
          <FormatQuote
            onClick={e => {
              e.preventDefault()
              this.onClickBlock(e, "block-quote")
            }}
          />
          <FormatListNumbered
            onClick={e => {
              e.preventDefault()
              this.onClickBlock(e, "numbered-list")
            }}
          />

          <FormatListBulleted
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
            value={this.props.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderNode={this.renderNode}
            renderMark={this.renderMark}
            style={{ maxWidth: 1000, minWidth: 800 }}
          />
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
      } = this.props

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
    this.props.onChange(value)
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

export default DestructuredEditor
