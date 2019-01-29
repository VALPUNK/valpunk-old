import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import RichTextEditor from "./index"
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
  .add("Rich Text Viewer", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <RichTextEditor
          contentId="cjrgt2vb80uvg08085czabcvl"
          uriEndpoint="http://localhost:4000"
        />
      </ApolloProvider>
    </CenteredForStories>
  ))
