import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache, gql } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider, Query } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import RichTextEditor from "./index"
import { getContent, getContentVariables } from "./__generated__/getContent"
import { Editor as CoreEditor, Value } from "slate"
import { GET_CONTENT } from "../RichTextViewer"
import SimpleViewer from "./index"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  // const getContent = async (contentId: string) => {
  //   const uriEndpoint = "http://localhost:4000"
  //   const result = await client.query<getContent, getContentVariables>({
  //     query: GET_CONTENT,
  //     variables: {
  //       contentId
  //     },
  //     context: {
  //       uri: uriEndpoint
  //     }
  //   })

  //   const title = result.data.getContent.title
  //   const author = result.data.getContent.author
  //   const valueContent = Value.fromJSON(
  //     JSON.parse(result.data.getContent.content)
  //   )

  //   const data = { title, author, valueContent }
  //   return data
  //   // this.setState({
  //   //   title: title,
  //   //   author: author,
  //   //   value: valueContent
  //   // })
  // }
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Simple Viewer", () => {
    return (
      <CenteredForStories>
        <ApolloProvider client={client}>

          <ContentQuery
            query={GET_CONTENT}
            variables={{ contentId: "cjr2jirai8r8y0a71d2a6xl73" }}
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
              return (
                <div>
                  <div style={{ fontSize: "2em", textAlign: "center" }}>{data.getContent.title}</div>
                  <div style={{ fontSize: "1.5em", textAlign: "center", fontStyle: "italic", color: "#555" }}>
                    {data.getContent.author}
                  </div>
                  <SimpleViewer value={valueContent} />
                </div>
              )
            }}
          </ContentQuery>
        </ApolloProvider>
      </CenteredForStories>
    )
  })

class ContentQuery extends Query<getContent, getContentVariables> {}
