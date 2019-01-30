import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import RichTextEditor from "./index"
import "./slate.css"
import { withKnobs, object } from "@storybook/addon-knobs/react"


const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }), withKnobs)
  .add("Rich Text Editor", () => {
    const contentId = object("contentId", "cjrgt2vb80uvg08085czabcvl")
    const uriEndpoint = object("uriEndpoint", "http://localhost:4000")
    const businessType = object("businessType", "VALPUNK")
    return(
    <CenteredForStories>
      <ApolloProvider client={client}>
        <RichTextEditor
          businessType={businessType}
          uriEndpoint={uriEndpoint}
          contentId={contentId}
                  />
      </ApolloProvider>
    </CenteredForStories>
  )})
