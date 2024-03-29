import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  injectStripe,
  PostalCodeElement,
  ReactStripeElements,
  StripeProvider
} from "react-stripe-elements-universal";
import { CenteredForStories } from "~/components/compositions";
import MuiInput from "./MuiInput";

(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Stripe Card Element", () => (
    <StripeProvider apiKey={"__YOUR_STRIPE_PUBLIC_API_KEY__"}>
      <Elements>
        <CenteredForStories>
          <InjectedStripe />
        </CenteredForStories>
      </Elements>
    </StripeProvider>
  ));

interface Props {
  stripe?: ReactStripeElements.StripeProps;
}

const StripeCards = ({ stripe }: Props) => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault();

    stripe.createSource().then((payload: any) => {
      if (payload.error) {
        console.log(payload.error);
      } else {
        console.log("source", payload);
      }
    });
  };

  return (
    <Grid container item xs={12} lg={4} spacing={16}>
      <Paper
        style={{
          padding: 16,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container item xs={12} spacing={16}>
            <Grid item xs={12}>
              <MuiInput
                label="Card Number"
                component={CardNumberElement}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <MuiInput
                label="Expiry (MM / YY)"
                component={CardExpiryElement}
                stripeStyle={{ base: { color: "dodgerblue" } }}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <MuiInput
                label="CVC"
                component={CardCVCElement}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} lg={5}>
              <MuiInput
                label="Postal / Zip Code"
                component={PostalCodeElement}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <button type="submit">Submit</button>
        </form>
      </Paper>
    </Grid>
  );
};

const InjectedStripe = injectStripe(StripeCards);
