import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantStatus = {
  /**
   * A fully operational merchant account. The merchant can interact with Square products and APIs.
   */
  Active: "ACTIVE",
  /**
   * A functionally limited merchant account. The merchant can only have limited interaction via
   * Square APIs. The merchant cannot log in or access the seller dashboard.
   */
  Inactive: "INACTIVE",
} as const;
export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus] | (string & {});

export const merchantStatusSchema: EnumSchema<MerchantStatus> = s.enumOf<MerchantStatus>(MerchantStatus);
