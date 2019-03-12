import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "../../../components/compositions"
import TimedPromoBarBuilder from './index';

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})



;(storiesOf("PromoBar", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("TimedPromoBarBuilder", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <TimedPromoBarBuilder
          businessType="NIMBUS"
          // promoSlug="NIMBUS-top-promo"
          promoSlug="NIMBUS-time-late"
          uriEndpoint="http://localhost:4000"
          />
      </ApolloProvider>
    </CenteredForStories>
  ))
