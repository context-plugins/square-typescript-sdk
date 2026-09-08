import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or
 * `APPOINTMENTS_SERVICE` items.
 */
export const CatalogItemProductType = {
  /** An ordinary item. */
  Regular: "REGULAR",
  /** A Square gift card. */
  GiftCard: "GIFT_CARD",
  /** A service that can be booked using the Square Appointments app. */
  AppointmentsService: "APPOINTMENTS_SERVICE",
  /** A food or beverage item that can be sold by restaurants and other food venues. */
  FoodAndBev: "FOOD_AND_BEV",
  /** An event which tickets can be sold for, including location, address, and times. */
  Event: "EVENT",
  /** A digital item like an ebook or song. */
  Digital: "DIGITAL",
  /** A donation which site visitors can send for any cause. */
  Donation: "DONATION",
  /**
   * A legacy Square Online service that is manually fulfilled. This corresponds to the `Other` item
   * type displayed in the Square Seller Dashboard and Square POS apps.
   */
  LegacySquareOnlineService: "LEGACY_SQUARE_ONLINE_SERVICE",
  /**
   * A legacy Square Online membership that is manually fulfilled. This corresponds to the
   * `Membership` item type displayed in the Square Seller Dashboard and Square POS apps.
   */
  LegacySquareOnlineMembership: "LEGACY_SQUARE_ONLINE_MEMBERSHIP",
} as const;
export type CatalogItemProductType =
  | (typeof CatalogItemProductType)[keyof typeof CatalogItemProductType]
  | (string & {});

export const catalogItemProductTypeSchema: EnumSchema<CatalogItemProductType> =
  s.enumOf<CatalogItemProductType>(CatalogItemProductType);
