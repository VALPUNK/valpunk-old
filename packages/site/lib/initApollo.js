import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import { AUTH_TOKEN } from '~/constants/constants';

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState, { getToken }) {
  console.log('db ', process.env.DATABASE)
  const httpLink = createHttpLink({
    uri: process.env.DATABASE,
    // credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    let token = ""
    if(process.browser) {
      token = localStorage.getItem(AUTH_TOKEN)
    }

    // const token = localStorage.getItem(AUTH_TOKEN)
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : null,
      }
    }
  })

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
