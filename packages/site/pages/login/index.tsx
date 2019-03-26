import { TextInputField } from "@valpunk/core"
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
          <div style={{ minWidth: 400, padding: 16, backgroundColor: "white" }}>
            <Formik<Values>
              initialValues={{}}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email()
                  .required("Required"),

                password: Yup.string().required("Required")
              })}
              onSubmit={async (_values, { setSubmitting }) => {
                setSubmitting(true)

                setSubmitting(false)
              }}
              // render={({ submitForm, isSubmitting, error }) => (
              render={() => (
                <Form>
                  <Field
                    name="email"
                    render={(props: any) => (
                      <TextInputField
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        style={{
                          backgroundColor: "white",
                          margin: 8,
                          width: "90%",
                          borderRadius: "4px"
                        }}
                        {...props}
                      />
                    )}
                  />
                  <Field
                    name="password"
                    render={(props: any) => (
                      <TextInputField
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        style={{
                          backgroundColor: "white",
                          margin: 8,
                          width: "90%",
                          borderRadius: "4px"
                        }}
                        {...props}
                      />
                    )}
                  />
                  <div style={{ minHeight: 100 }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 16
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: VP_RED,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        padding: "8px 10px",
                        width: "100%",
                        fontSize: 24,
                        fontFamily: "Roboto Mono, monospace",
                        borderRadius: 5,
                        cursor: "pointer"
                      }}
                    >{`<Login/>`}</span>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
