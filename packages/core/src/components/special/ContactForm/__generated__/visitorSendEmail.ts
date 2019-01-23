/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: visitorSendEmail
// ====================================================

export interface visitorSendEmail_visitorSendEmail {
  body: string | null;
}

export interface visitorSendEmail {
  visitorSendEmail: visitorSendEmail_visitorSendEmail;
}

export interface visitorSendEmailVariables {
  businessType: BusinessType;
  title: string;
  body: string;
  to: string[];
  from: string;
}
