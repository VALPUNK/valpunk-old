import { withInfo } from "@storybook/addon-info"
import { object, withKnobs } from "@storybook/addon-knobs/react"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider, Query } from "react-apollo"
import { Value } from "slate"
import { CenteredForStories } from "~/components/compositions"
import { GET_CONTENT } from "../RichTextViewer"
import {
  getContent,
  getContentVariables
} from "../RichTextViewer/__generated__/getContent"
import EditorFrame from "./EditorFrame"
import "./slate.css"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }), withKnobs)
  .add("Destructured Editor", () => {
    const contentId = object("Content Id", "cjrgt2yba0uvn08086o9akphz")
    const uriEndpoint = object("uriEndpoint", "http://localhost:4000")
    const businessType = object("businessType", "VALPUNK")
    return (
      <CenteredForStories>
        <ApolloProvider client={client}>
          {contentId ? (
            <ContentQuery
              query={GET_CONTENT}
              variables={{ contentId: contentId }}
              context={{ uri: uriEndpoint }}
            >
              {({ loading, data, error }) => {
                if (loading) {
                  return <div>Bleh!</div>
                }
                if (error) {
                  console.log("Error: ", error)
                  return <div>{error}</div>
                }
                const valueContent = Value.fromJSON(
                  JSON.parse(data.getContent.content)
                )

                //  console.log("ValueContent: ", data.getContent.content)
                return (
                  <div>
                    <EditorFrame
                      title={data.getContent.title}
                      author={data.getContent.author}
                      businessType={businessType}
                      uriEndpoint={uriEndpoint}
                      contentId={data.getContent.id}
                      value={valueContent}
                    />
                  </div>
                )
              }}
            </ContentQuery>
          ) : (
            <EditorFrame
              businessType={businessType}
              uriEndpoint={uriEndpoint}
              contentId={contentId}
            />
          )}
        </ApolloProvider>
      </CenteredForStories>
    )
  })

class ContentQuery extends Query<getContent, getContentVariables> {}
