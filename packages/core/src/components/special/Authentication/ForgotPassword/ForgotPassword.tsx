import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import Router from "next/router"
import * as React from "react"
import * as Yup from "yup"

interface Values {
  email?: string
  password?: string
}

export const ForgotPassword = () => {
  return (
    <Formik<Values>
      initialValues={{}}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Required")
      })}
      onSubmit={(_values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false)
          // action("submit")(values)
        }, 2000)
      }}
      render={({ submitForm, isSubmitting, error }) => (
        <Form>
          <Grid
            container={true}
            alignItems="center"
            justify="center"
            style={{ paddingBottom: 50 }}
          >
            <Grid item={true} xs={11} md={8}>
              <Field
                name="email"
                component={TextField}
                style={{ width: "100%" }}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid container spacing={24} item={true} xs={8} md={8}>
              <Grid item xs={8}>
                <Button
                  onClick={submitForm}
                  disabled={error || isSubmitting}
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: 30
                  }}
                >
                  Reset Password
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={() => Router.back()}
                  disabled={error || isSubmitting}
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: 30
                  }}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}
