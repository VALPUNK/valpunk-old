/* tslint:disable */
// This file was automatically generated and should not be edited.

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
  title: string;
  body: string;
  to: string;
  from: string;
}
