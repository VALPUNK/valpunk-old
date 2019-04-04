import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import { ApolloClient, gql } from "apollo-boost"
// import { action } from "@storybook/addon-actions"
import { Field, Form, Formik } from "formik"
import * as React from "react"
import { withApollo } from "react-apollo"
import * as Yup from "yup"
import { BusinessType } from "../../../../../__generated__/globalTypes"
import TextInputField from "../../../../components/collections/TextInputField"
import {
  LoginMutation,
  LoginMutationVariables
} from "./__generated__/LoginMutation"

interface Props {
  client?: ApolloClient<any>
  businessType: BusinessType
  uriEndpoint?: string
  tokenName: string
}

interface Values {
  email?: string
  password?: string
}

export class Login extends React.Component<Props> {
  public saveUserData = (token: string): void => {
    localStorage.setItem(this.props.tokenName, token)
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
              : Yup.string().required("Password is required")
          )
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)

          const email = values.email
          const password = values.password
          const businessType = this.props.businessType

          this.props.client
            .mutate<LoginMutation, LoginMutationVariables>({
              errorPolicy: "all",
              mutation: LOGIN_MUTATION,
              variables: {
                email,
                password,
                businessType
              },
              context: this.props.uriEndpoint
                ? this.props.uriEndpoint
                : "https://valpunk-server.now.sh/"
            })
            .then(result => {
              console.log("result")
              const { token } = result.data
                ? result.data.login
                : null && console.log("no data in result found")

              this.props.client.resetStore()
              this.saveUserData(token)
              // this.props.router.push("/dashboard")
              console.log("token", token)
              setSubmitting(false)
            })
            .catch(d => {
              console.log("Login results: ", d)
              if (d.errors) {
                alert(d.errors[0].message)
              }
              setSubmitting(false)
            })
        }}
        render={({
          submitForm,
          isSubmitting,
          // status,
          isValidating,
          // submitCount,
          error
          // errors
        }) => (
          <Form>
            {/* {console.log("isValidating: ", isValidating)}
            {console.log("isSubmitting: ", isSubmitting)}
            {console.log("status: ", status)}
            {console.log("is Error?: ", errors)}
            {console.log("Submit Count: ", submitCount)} */}
            <Grid
              container={true}
              alignItems="center"
              justify="center"
              style={{ paddingBottom: 50 }}
            >
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
                  margin="normal"
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
              <Grid item={true} xs={8} md={8}>
                <Button
                  onClick={submitForm}
                  disabled={error || isSubmitting || isValidating}
                  type="submit"
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: 30
                  }}
                >
                  Login
                </Button>

                <p>
                  <a href="/forgot">Forgot Password?</a>
                </p>
              </Grid>
            </Grid>
          </Form>
        )}
      />
    )
  }
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
    $businessType: BusinessType!
  ) {
    login(email: $email, password: $password, businessType: $businessType) {
      token
    }
  }
`
