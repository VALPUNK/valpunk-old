/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup {
  token: string;
}

export interface signup {
  signup: signup_signup;
}

export interface signupVariables {
  email: string;
  password: string;
  firstName: string;
  lastName?: string | null;
  businessType: BusinessType;
}
