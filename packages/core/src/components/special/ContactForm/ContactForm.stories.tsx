import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import ContactForm from "."

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
;(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Contact Form", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <ContactForm
          businessType="VALPUNK"
          uriEndpoint="http://localhost:4000"
        />
      </ApolloProvider>
    </CenteredForStories>
  ))
