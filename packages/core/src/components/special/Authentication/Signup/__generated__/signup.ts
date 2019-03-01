import { BusinessType } from '../../../../../../__generated__/globalTypes';

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: officeSignUp
// ====================================================

export interface signup_signup {
  token: string | null;
}

export interface signup {
  signup: signup_signup | null;
}

export interface signupVariables {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  businessType: BusinessType;
}
