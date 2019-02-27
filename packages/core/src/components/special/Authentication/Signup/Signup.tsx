import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"
import { ApolloClient, gql } from "apollo-boost"
import { BusinessType } from "../../../../../__generated__/globalTypes"
// import { TextField } from "~/components/basic"

interface Props {
  client?: ApolloClient<any>
  businessType: BusinessType
}

interface Values {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export class Signup extends React.Component<Props> {
  public saveUserData = async (token: string) => {
    await localStorage.setItem(this.props.businessType, token)
  }

  public signup = async () => {
    const { email, password, name } = this.state
    // console.warn("businessId is hardcoded")

    // try {
    //   const result = await this.props.client.mutate({
    //     mutation: OFFICE_SIGNUP_MUTATION,
    //     variables: {
    //       email,
    //       password,
    //       name,
    //       businessId: "cjp8nyc10dak80a62an1dbhjo"
    //     }
    //   })

    //   const { token } = result.data.officeSignUp
    //   await this.props.client.resetStore()
    //   console.log(result)
    //   this.saveUserData(token)
    //   // this.props.router.push("/dashboard")
    // } catch (e) {
    //   console.log(e)
    // }
  }

  public render() {
    return (
      <Formik<Values>
        initialValues={{}}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
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

          const email = _values.email
          const password = _values.password
          const name = _values.name
          const businessType = this.props.businessType

          try {
            const result = await this.props.client.mutate({
              mutation: SIGNUP_MUTATION,
              variables: {
                email,
                password,
                name,
                businessType
              }
            })

            const { token } = result.data.officeSignUp
            await this.props.client.resetStore()
            console.log(result)
            this.saveUserData(token)
            // this.props.router.push("/dashboard")
          } catch (e) {
            console.log(e)
          }
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
                  name="name"
                  component={TextField}
                  style={{ width: "100%" }}
                  type="text"
                  label="Name"
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="email"
                  component={TextField}
                  style={{ width: "100%" }}
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="password"
                  component={TextField}
                  type="password"
                  label="Password"
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
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      />
    )
  }
}

const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String
    $businessType: BusinessType!
  ) {
    signup(
      email: $email
      password: $password
      firstname: $firstname
      lastName: $lastName
      businessType: $businessType
    ) {
      token
    }
  }
`
