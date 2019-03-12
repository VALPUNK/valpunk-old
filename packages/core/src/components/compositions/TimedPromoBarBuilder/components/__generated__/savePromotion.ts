/* tslint:disable */
// This file was automatically generated and should not be edited.

import { BusinessType, PromoStatusType } from "./..\\..\\..\\..\\..\\..\\__generated__\\globalTypes";

// ====================================================
// GraphQL mutation operation: savePromotion
// ====================================================

export interface savePromotion_createOrConnectPromotion {
  id: string;
  promoSlug: string;
  startDate: any | null;
  endDate: any | null;
  status: PromoStatusType | null;
}

export interface savePromotion {
  createOrConnectPromotion: savePromotion_createOrConnectPromotion;
}

export interface savePromotionVariables {
  promoId?: string | null;
  promoSlug: string;
  businessType: BusinessType;
  contentSlug: string;
  startDate?: any | null;
  endDate?: any | null;
  status?: PromoStatusType | null;
}
