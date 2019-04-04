import { Authentication } from "@valpunk/core"
import React from "react"
import { Meta } from "~/components/universal"
import { VP_BLACK, VP_BLUE } from "~/constants/constants"
import { ApolloClient } from "apollo-boost"

interface Values {
  password?: string
  email?: string
}

interface LoginProps {
  client?: ApolloClient<any>
}

export const Login = (props: LoginProps) => {
  return (
    <div style={{ backgroundColor: VP_BLACK }}>
      <Meta />
      <div>Some Header Thing</div>
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{ borderRadius: 5, boxShadow: "3px 3px 6px rgba(0,0,0,0.5)" }}
        >
          <div
            style={{
              minHeight: 200,
              backgroundColor: VP_BLUE,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: 100,
                height: 100,
                borderRadius: 50
              }}
            />
          </div>
          <div style={{ width: 500 }}>
            <Authentication client={props.client} businessType="VALPUNK" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
