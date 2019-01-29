import { withInfo } from "@storybook/addon-info"
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
import DestructuredViewer from "./index"
import "./slate.css"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Destructured Viewer", () => {
    return (
      <CenteredForStories>
        <ApolloProvider client={client}>
          <ContentQuery
            query={GET_CONTENT}
            variables={{ contentId: "cjrgt2yba0uvn08086o9akphz" }}
            context={{ uri: "http://localhost:4000" }}
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

              // console.log("ValueContent: ", data.getContent.content)
              return (
                <div>
                  <div style={{ fontSize: "2em", textAlign: "center" }}>
                    {data.getContent.title}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5em",
                      textAlign: "center",
                      fontStyle: "italic",
                      color: "#555"
                    }}
                  >
                    {data.getContent.author}
                  </div>

                  <div style={{ border: "1px solid red" }}>
                    <DestructuredViewer value={valueContent} />
                  </div>
                  <div style={{ color: "red" }}>*Editor Content</div>
                </div>
              )
            }}
          </ContentQuery>
        </ApolloProvider>
      </CenteredForStories>
    )
  })

class ContentQuery extends Query<getContent, getContentVariables> {}
