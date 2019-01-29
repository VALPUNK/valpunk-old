/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: createOrConnectContent
// ====================================================

export interface createOrConnectContent_createOrConnectContent {
  id: string;
  content: string;
}

export interface createOrConnectContent {
  createOrConnectContent: createOrConnectContent_createOrConnectContent;
}

export interface createOrConnectContentVariables {
  title?: string | null;
  author?: string | null;
  content: string;
  contentId?: string | null;
  accountId?: string | null;
  businessType: BusinessType;
}
