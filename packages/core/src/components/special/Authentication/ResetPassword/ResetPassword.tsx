import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"

interface Values {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export const ResetPassword = () => {
  return (
    <Formik<Values>
      initialValues={{}}
      validationSchema={Yup.object().shape({
        // email: Yup.string()
        //   .email()
        //   .required("Required"),
        password: Yup.lazy(value =>
          !value
            ? Yup.string()
            : Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required")
        ),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords do not match"
        )
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
            {/* <Grid item={true} xs={11} md={8}>
              <Field
                name="name"
                component={TextField}
                type="text"
                label="Name"
              />
            </Grid> */}
            {/* <Grid item={true} xs={11} md={8}>
              <Field
                name="email"
                component={TextField}
                type="email"
                label="Email"
              />
            </Grid> */}
            <Grid item={true} xs={11} md={8}>
              <Field
                name="password"
                component={TextField}
                type="password"
                label="New Password"
                style={{ width: "100%" }}
                margin="normal"
              />
            </Grid>
            <Grid item={true} xs={11} md={8}>
              <Field
                name="confirmPassword"
                component={TextField}
                type="password"
                label="Confirm Password"
                style={{ width: "100%" }}
                margin="normal"
              />
            </Grid>
            <Grid item={true} xs={8} md={8}>
              <Button
                onClick={submitForm}
                // onClick={signup}
                disabled={error || isSubmitting}
                variant="contained"
                // onClick={reset}
                // disabled={submitting || pristine}
                style={{
                  width: "100%",
                  marginTop: 30
                }}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    />
  )
}
