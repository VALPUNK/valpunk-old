import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"
import { ApolloClient, gql } from "apollo-boost"
import { BusinessType } from "../../../../../__generated__/globalTypes"
import TextInputField from "../../../../components/collections/TextInputField"
import { signup, signupVariables } from "./__generated__/signup"
// import { TextField } from "~/components/basic"

interface Props {
  client?: ApolloClient<any>
  businessType: BusinessType
  uriEndpoint?: string
}

interface Values {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export class Signup extends React.Component<Props> {
  public saveUserData = async (token: string) => {
    await localStorage.setItem(this.props.businessType, token)
  }

  public signup = async () => {
    // const { email, password, name } = this.state
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
          firstName: Yup.string(),
          lastName: Yup.string(),
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
        onSubmit={async (_values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            // action("submit")(values)
          }, 2000)

          const email = _values.email
          const password = _values.password
          // const name = _values.name
          const firstName = _values.firstName
          const lastName = _values.lastName
          const businessType = this.props.businessType

          try {
            const result = await this.props.client.mutate<
              signup,
              signupVariables
            >({
              mutation: SIGNUP_MUTATION,
              variables: {
                email,
                password,
                firstName,
                lastName,
                businessType
              },
              context: this.props.uriEndpoint
                ? this.props.uriEndpoint
                : "https://valpunk-server.now.sh/"
            })

            const { token } = result.data.signup
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
                  name="firstName"
                  style={{ width: "100%" }}
                  render={(props: any) => (
                    <TextInputField
                      name="firstName"
                      type="text"
                      label="First Name"
                      // variant="outlined"
                      {...props}
                    />
                  )}
                  margin="normal"
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="lastName"
                  style={{ width: "100%" }}
                  render={(props: any) => (
                    <TextInputField
                      name="lastName"
                      type="text"
                      label="Last Name"
                      // variant="outlined"
                      {...props}
                    />
                  )}
                  margin="normal"
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="email"
                  render={(props: any) => (
                    <TextInputField
                      name="email"
                      type="email"
                      label="Email"
                      // variant="outlined"
                      {...props}
                    />
                  )}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="password"
                  render={(props: any) => (
                    <TextInputField
                      name="password"
                      type="password"
                      label="Password"
                      // variant="outlined"
                      {...props}
                    />
                  )}
                  style={{ width: "100%" }}
                  margin="normal"
                />
              </Grid>
              <Grid item={true} xs={11} md={8}>
                <Field
                  name="confirmPassword"
                  render={(props: any) => (
                    <TextInputField
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      // variant="outlined"
                      {...props}
                    />
                  )}
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
