import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import SimpleContentEditor from "./index"
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
  .add("Simple Content Editor", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <SimpleContentEditor
          businessType="VALPUNK"
          uriEndpoint="http://localhost:4000"
          contentId="cjrgt22740uuv0808ybdljhvp"
          // contentId="cjrckd6vz00p608082lyuyn2y"
          // contentId="cjrco5odr01j90808o05dx3iy"
        />
      </ApolloProvider>
    </CenteredForStories>
  ))
