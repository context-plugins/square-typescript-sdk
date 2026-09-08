import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines item visibility in Ecom (Online Store) and Online Checkout. */
export const EcomVisibility = {
  /** Item is not synced with Ecom (Weebly). This is the default state */
  Unindexed: "UNINDEXED",
  /** Item is synced but is unavailable within Ecom (Weebly) and Online Checkout */
  Unavailable: "UNAVAILABLE",
  /** Option for seller to choose manually created Quick Amounts. */
  Hidden: "HIDDEN",
  /**
   * Item is synced but available within Ecom (Weebly) and Online Checkout but is hidden from Ecom
   * Store.
   */
  Visible: "VISIBLE",
} as const;
export type EcomVisibility = (typeof EcomVisibility)[keyof typeof EcomVisibility] | (string & {});

export const ecomVisibilitySchema: EnumSchema<EcomVisibility> = s.enumOf<EcomVisibility>(EcomVisibility);
