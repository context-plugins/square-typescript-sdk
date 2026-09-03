import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogItemProductType = {
  Regular: "REGULAR",
  GiftCard: "GIFT_CARD",
  AppointmentsService: "APPOINTMENTS_SERVICE",
  FoodAndBev: "FOOD_AND_BEV",
  Event: "EVENT",
  Digital: "DIGITAL",
  Donation: "DONATION",
  LegacySquareOnlineService: "LEGACY_SQUARE_ONLINE_SERVICE",
  LegacySquareOnlineMembership: "LEGACY_SQUARE_ONLINE_MEMBERSHIP",
} as const;
export type CatalogItemProductType =
  | (typeof CatalogItemProductType)[keyof typeof CatalogItemProductType]
  | (string & {});

export const catalogItemProductTypeSchema: EnumSchema<CatalogItemProductType> =
  s.enumOf<CatalogItemProductType>(CatalogItemProductType);
