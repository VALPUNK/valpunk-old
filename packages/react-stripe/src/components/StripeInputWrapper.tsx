// Wrapper that contains Stripe Element related funtionality

import * as React from "react";
import { ReactStripeElements } from "react-stripe-elements-universal";

export interface StripeInputWrapperProps
  extends ReactStripeElements.ElementsOptions {
  children: (
    props: {
      focused: boolean;
      empty: boolean;
      error: stripe.Error;
      onChange: (e: any) => void;
      onBlur: () => void;
      onFocus: () => void;
    }
  ) => React.ReactNode;
}

interface State {
  focused: boolean;
  empty: boolean;
  error: stripe.Error;
}

export interface StripeInputError {
  code: "incomplete_number" | "todo";
  type: "validation_error" | "todo";
  message: string;
}

export default class StripeInputWrapper extends React.Component<
  StripeInputWrapperProps,
  State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      focused: false,
      empty: true,
      error: undefined
    };
    this.onChange.bind(this);
    this.onBlur.bind(this);
    this.onFocus.bind(this);
  }

  public onBlur = () => {
    this.setState({ focused: false });
  };

  public onFocus = () => {
    this.setState({ focused: true });
  };

  public onChange = (e: any) => {
    this.setState({
      error: e.error,
      empty: e.empty
    });
  };

  public render() {
    const { focused, empty, error } = this.state;

    return (
      <>
        {this.props.children({
          focused,
          empty,
          error,
          onChange: this.onChange,
          onBlur: this.onBlur,
          onFocus: this.onFocus
        })}
      </>
    );
  }
}
