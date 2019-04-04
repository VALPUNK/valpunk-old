import CircularProgress from "@material-ui/core/CircularProgress"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import { withRouter, WithRouterProps } from "next/router"
import * as React from "react"
import SwipeableViews from "react-swipeable-views"
import { Login } from "./Login/Login"
import { Signup } from "./Signup/Signup"
import { BusinessType } from "../../../../__generated__/globalTypes"
import { ApolloClient, gql } from "apollo-boost"
import { withApollo } from "react-apollo"

export interface Props {
  client?: ApolloClient<any>
  theme?: {
    main?: {
      primary?: string
      secondary?: string
    }
    form?: {
      primary?: string
      secondary?: string
    }
  }
  authState?: authStateType
  businessType: BusinessType
  mode?: number
  logo?: string
  uriEndpoint?: string
  signUp?: boolean
  tokenName: string
}

interface State {
  authState: authStateType
  value: number
}

type authStateType = "default" | "error" | "submitting"

const Authentication = (props: Props) => {
  // authState: "default",
  //     value: 0

  const [value, setValue] = React.useState(0)
  const [authState, setAuthState] = React.useState<authStateType>("default")

  const handleChange = (_event: React.FormEvent, v: number) => {
    setValue(v)
    // setValue(v)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  // React.useEffect(() => {
  //   if (router && router.query && router.query.mode) {
  //     if (router.query.mode.toString().toLowerCase() === "login") {
  //       setValue(0)
  //     } else if (router.query.mode.toString().toLowerCase() === "signup") {
  //       setValue(1)
  //     }
  //   }
  // })

  return (
    <div>
      <Grid
        container={true}
        alignItems="center"
        justify="center"
        style={{
          backgroundColor: props.theme.main.primary || "dodgerblue"
        }}
      >
        {authState === "default" && (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 300,
              margin: "10px"
            }}
          >
            {props.logo && (
              <img
                src={props.logo}
                alt="logo"
                style={{
                  padding: "15px",
                  maxWidth: "300px",
                  maxHeight: "300px"
                }}
              />
            )}
          </div>
        )}
        {authState === "submitting" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CircularProgress
              style={{ color: "white" }}
              size={40}
              thickness={4.0}
            />
          </div>
        )}
        {authState === "error" && (
          <Typography
            style={{ color: "red", backgroundColor: "white", padding: 8 }}
            variant="subtitle2"
          >
            There was an error.
          </Typography>
        )}
      </Grid>
      <Grid container={true}>
        <Grid item={true} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            fullWidth={true}
            style={{
              backgroundColor: props.theme.main.primary || "dodgerblue"
            }}
            indicatorColor={props.theme.main.secondary || "tomato"}
            // TabIndicatorProps={{
            //   color: "orange"
            // }}
          >
            <Tab label="Log In" style={{ color: "white" }} />
            {props.signUp && <Tab label="Sign Up" style={{ color: "white" }} />}
          </Tabs>
        </Grid>
      </Grid>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <Login
          uriEndpoint={props.uriEndpoint}
          client={props.client}
          businessType={props.businessType}
          tokenName={props.tokenName}
        />

        {props.signUp && (
          <Signup
            uriEndpoint={props.uriEndpoint}
            client={props.client}
            businessType={props.businessType}
            tokenName={props.tokenName}
          />
        )}
      </SwipeableViews>
    </div>
  )
}

export default withApollo(Authentication)
