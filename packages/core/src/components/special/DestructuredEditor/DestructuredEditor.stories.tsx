import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache, gql } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider, Query } from "react-apollo"
import { Value } from "slate"
import { CenteredForStories } from "~/components/compositions"
import EditorFrame from "./EditorFrame"
import { GET_CONTENT } from "../RichTextViewer"
import { getContent, getContentVariables } from "./__generated__/getContent"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Destructured Editor", () => {
    return (
      <CenteredForStories>
        <ApolloProvider client={client}>
          <ContentQuery
            query={GET_CONTENT}
            variables={{ contentId: "cjrcjv3dt00eg08897khcb69x" }}
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

                  <EditorFrame
                    title={data.getContent.title}
                    author={data.getContent.author}
                    businessType="VALPUNK"
                    uriEndpoint="http://localhost:4000"
                    contentId="cjrcjv3dt00eg08897khcb69x"
                    value={valueContent}
                  />
                </div>
              )
            }}
          </ContentQuery>
        </ApolloProvider>
      </CenteredForStories>
    )
  })

class ContentQuery extends Query<getContent, getContentVariables> {}
