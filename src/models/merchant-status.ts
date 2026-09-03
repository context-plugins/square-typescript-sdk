import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus] | (string & {});

export const merchantStatusSchema: EnumSchema<MerchantStatus> = s.enumOf<MerchantStatus>(MerchantStatus);
