/* tslint:disable */
// This file was automatically generated and should not be edited.

import { PromoStatusType } from "./..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL query operation: getPromotionDisplay
// ====================================================

export interface getPromotionDisplay_getPromotion {
  id: string;
  slug: string;
  startDate: any | null;
  endDate: any | null;
  contentId: string | null;
  contentSlug: string | null;
  valueContent: string | null;
  status: PromoStatusType | null;
}

export interface getPromotionDisplay {
  getPromotion: getPromotionDisplay_getPromotion;
}

export interface getPromotionDisplayVariables {
  promoSlug: string;
}
