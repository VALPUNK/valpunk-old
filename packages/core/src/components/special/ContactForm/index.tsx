import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { ApolloClient, gql } from "apollo-boost"
import { Field, Form, Formik } from "formik"
import { GraphQLError } from "graphql"
import * as React from "react"
import { withApollo } from "react-apollo"
import * as Yup from "yup"
import TextInputField from "~/components/collections/TextInputField"

interface Values {
  name?: string
  email?: string
  message?: string
}

interface ContactFormProps {
  client: ApolloClient<any>
  uriEndpoint?: string
  receivingEmails?: string[]
}

interface State {
  open?: boolean
  message?: string | GraphQLError[] | any
}

class ContactForm extends React.Component<ContactFormProps, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      open: false
    }
  }
  public handleOpen = () => {
    this.setState({ open: true })
  }

  public handleClose = () => {
    this.setState({ open: false })
  }

  public render() {
    return (
      <div>
        <Formik<Values>
          initialValues={{}}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email()
              .required("Required"),
            message: Yup.string().required("Required")
          })}
          onSubmit={async (_values, { setSubmitting }) => {
            // console.log("hi")
            setSubmitting(true)
            const result = await this.props.client
              .mutate({
                mutation: CONTACT_SEND_FORM,
                variables: {
                  title: `Name: ${_values.name}`,
                  to: this.props.receivingEmails ? this.props.receivingEmails : "enrico@valpunk.com",
                  from: _values.email,
                  body: _values.message
                },
                context: {
                  uri: this.props.uriEndpoint ? this.props.uriEndpoint : "https://valpunk-server.now.sh/"
                }
              })
              .then(response => {
                // console.log(response)
                setSubmitting(false)
                if (!response.errors) {
                  this.setState({
                    open: true,
                    message:
                      "Message sent successfully! We will reach out to you shortly!"
                  })
                } else {
                  this.setState({
                    open: true,
                    message: response.errors
                  })
                }
              })
              .catch(e => {
                setSubmitting(false)
                this.setState({
                  open: true,
                  message: e
                })
              })
            // if(!result.errors) {
            // setSubmitting(false)
            // }

            // setTimeout(() => {
            //   setSubmitting(false)
            //   // action("submit")(values)
            // }, 2000)
          }}
          render={({ submitForm, isSubmitting, error }) => (
            <Form>
              <Field
                name="name"
                render={(props: any) => (
                  <TextInputField
                    name="name"
                    type="text"
                    label="Name"
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
                name="email"
                render={(props: any) => (
                  <TextInputField
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    {...props}
                  />
                )}
                style={{ width: "100%" }}
              />

              <Field
                name="message"
                render={(props: any) => (
                  <TextInputField
                    name="message"
                    type="text"
                    label="Message"
                    style={{ width: "100%" }}
                    margin="normal"
                    multiline
                    variant="outlined"
                    rows={5}
                    {...props}
                  />
                )}
              />

              <Button
                onClick={submitForm}
                // onClick={signup}
                type="submit"
                disabled={error || isSubmitting}
                variant="contained"
                // onClick={reset}
                // disabled={submitting || pristine}
                style={{
                  width: "100%",
                  marginTop: 30
                }}
              >
                Submit
              </Button>
            </Form>
          )}
        />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate(-${50}%, -${50}%)`,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: 300,
              backgroundColor: "white",
              boxShadow: "2px 2px 5px black",
              padding: 24,
              outline: "none",
              fontSize: 18
            }}
          >
            {this.state.message}
          </div>
        </Modal>
      </div>
    )
  }
}

const CONTACT_SEND_FORM = gql`
  mutation visitorSendEmail(
    $title: String!
    $body: String!
    $to: String!
    $from: String!
  ) {
    visitorSendEmail(title: $title, body: $body, to: $to, from: $from) {
      body
    }
  }
`

export default withApollo(ContactForm)
