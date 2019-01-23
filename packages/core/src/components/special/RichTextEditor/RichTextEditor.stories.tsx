import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache, gql } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import RichTextEditor from "./index"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Basic", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <RichTextEditor businessType="VALPUNK" uriEndpoint="http://localhost:4000"
        contentId="cjr2lds9c8xh10a71hdia4prn"
        />
      </ApolloProvider>
    </CenteredForStories>
  ))




