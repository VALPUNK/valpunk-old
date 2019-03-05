/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getContent
// ====================================================

export interface getContent_getContent {
  id: string;
  title: string | null;
  slug: string | null;
  author: string | null;
  content: string;
}

export interface getContent {
  getContent: getContent_getContent;
}

export interface getContentVariables {
  contentId: string;
}
