import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, Theme } from "@material-ui/core/styles"
import { ApolloClient } from "apollo-boost"
import { GenerateClassName, SheetsRegistry } from "jss"
import App, { Container } from "next/app"
import React from "react"
import { ApolloProvider } from "react-apollo"
import { JssProvider } from "react-jss"
import { Provider } from "react-redux"
import { compose } from "recompose"
import { Store } from "redux"
import getPageContext from "../lib/getPageContext"
import withApollo from "../lib/withApollo"
import withReduxStore from "../lib/withReduxStore"

interface Props {
  apolloClient: ApolloClient<any>
  reduxStore: Store
}

export interface PageContext {
  theme: Theme
  sheetsManager: Map<any, any>
  sheetsRegistry: SheetsRegistry
  generateClassName: GenerateClassName
}

class MyApp extends App<Props> {
  public pageContext: PageContext = null
  constructor(props: any) {
    super(props)
    this.pageContext = getPageContext()
    this.getPageInfo.bind(this)
  }

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  public getPageInfo = (page: string) => {
    console.log(page)
  }

  public render() {
    const { Component, pageProps, apolloClient, reduxStore } = this.props
    // reduxStore.subscribe(() => {
    //   saveState(reduxStore.getState())
    // })

    // const Layout = Component.Layout ? Component.Layout : Blank;
    // let UILayout: any = Blank
    // if (Component.Layout === "ADMIN") {
    //   UILayout = AdminDashboardContainer
    // } else if (Component.Layout === "CLIENT") {
    //   UILayout = DashboardContainer
    // }

    return (
      <Container>
        <Provider store={reduxStore}>
          <ApolloProvider client={apolloClient}>
            <JssProvider
              registry={this.pageContext.sheetsRegistry}
              generateClassName={this.pageContext.generateClassName}
            >
              {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
              <MuiThemeProvider
                theme={this.pageContext.theme}
                sheetsManager={this.pageContext.sheetsManager}
              >
                <CssBaseline>
                  <Component pageContext={this.pageContext} {...pageProps} />
                </CssBaseline>
              </MuiThemeProvider>
            </JssProvider>
          </ApolloProvider>
        </Provider>
      </Container>
    )
  }
}

const enhance = compose(
  withApollo,
  withReduxStore
)

const EnhancedComponent = enhance(MyApp)

export default EnhancedComponent
