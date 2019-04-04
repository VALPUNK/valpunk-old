import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import { ApolloClient, InMemoryCache } from "apollo-boost"
import { createHttpLink } from "apollo-link-http"
import * as React from "react"
import { ApolloProvider } from "react-apollo"
import { CenteredForStories } from "~/components/compositions"
import Authentication from "./index"
import { BusinessType } from "../../../../__generated__/globalTypes"
import Paper from "@material-ui/core/Paper"

const httpLink = createHttpLink({
  uri: process.env.DATABASE
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const businessType: BusinessType = BusinessType.VALPUNK
;(storiesOf("Authentication", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Authentication", () => (
    <CenteredForStories>
      <ApolloProvider client={client}>
        <div style={{ maxWidth: 800 }}>
          <Paper classes={{}} style={{ marginTop: 10 }}>
            <Authentication
              businessType={businessType}
              uriEndpoint="http://localhost:4000"
              tokenName="vp-token"
              // signUp
              theme={{
                main: {
                  primary: "teal"
                }
              }}
            />
          </Paper>
        </div>
      </ApolloProvider>
    </CenteredForStories>
  ))
