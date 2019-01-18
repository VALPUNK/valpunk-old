/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: createNewContent
// ====================================================

export interface createNewContent_createNewContent {
  id: string;
  content: string;
}

export interface createNewContent {
  createNewContent: createNewContent_createNewContent;
}

export interface createNewContentVariables {
  title?: string | null;
  author?: string | null;
  content: string;
  accountId?: string | null;
  businessType: BusinessType;
}
