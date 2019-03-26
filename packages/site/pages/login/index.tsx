import { TextInputField, Authentication } from "@valpunk/core"
import { Field, Form, Formik } from "formik"
import React from "react"
import * as Yup from "yup"
import { Meta } from "~/components/universal"
import { VP_BLACK, VP_BLUE, VP_RED } from "~/constants/constants"

interface Values {
  password?: string
  email?: string
}

export const Login = () => {
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
            <Authentication />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
