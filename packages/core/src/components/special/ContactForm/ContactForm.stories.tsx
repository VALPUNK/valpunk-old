import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import ContactForm from "."
import { getMaxListeners } from 'cluster';

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const emailList = ["adam@valpunk.com", "tttgkm@gmail.com"]


;(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Contact Form", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <ContactForm businessId="cjqzjb9jky7mt0a7103u5wx94" receivingEmails={emailList} />
      </ApolloProvider>
    </CenteredForStories>
  ))
