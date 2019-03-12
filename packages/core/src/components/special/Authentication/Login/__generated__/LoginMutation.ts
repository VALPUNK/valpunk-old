/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  token: string;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
  businessType: BusinessType;
}
