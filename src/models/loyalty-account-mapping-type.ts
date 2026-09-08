import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of mapping. */
export const LoyaltyAccountMappingType = {
  /** The loyalty account is mapped by phone. */
  Phone: "PHONE",
} as const;
export type LoyaltyAccountMappingType =
  | (typeof LoyaltyAccountMappingType)[keyof typeof LoyaltyAccountMappingType]
  | (string & {});

export const loyaltyAccountMappingTypeSchema: EnumSchema<LoyaltyAccountMappingType> =
  s.enumOf<LoyaltyAccountMappingType>(LoyaltyAccountMappingType);
