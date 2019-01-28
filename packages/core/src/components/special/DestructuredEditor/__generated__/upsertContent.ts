/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType } from "./..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: upsertContent
// ====================================================

export interface upsertContent_upsertContent {
  id: string;
  content: string;
}

export interface upsertContent {
  upsertContent: upsertContent_upsertContent;
}

export interface upsertContentVariables {
  title?: string | null;
  author?: string | null;
  content: string;
  contentId?: string | null;
  accountId?: string | null;
  businessType: BusinessType;
}
