import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents the mapping that associates a loyalty account with a buyer.
 *
 * Currently, a loyalty account can only be mapped to a buyer by phone number. For more information,
 * see [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
 */
export type LoyaltyAccountMapping = {
  /** The Square-assigned ID of the mapping. */
  id?: string;
  /** The timestamp when the mapping was created, in RFC 3339 format. */
  createdAt?: string;
  /** The phone number of the buyer, in E.164 format. For example, "+14155551111". */
  phoneNumber?: string | null;
};

export const loyaltyAccountMappingSchema: Schema<LoyaltyAccountMapping> = s.object<LoyaltyAccountMapping>({
  id: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  _keysMap: {
    createdAt: "created_at",
    phoneNumber: "phone_number",
  },
});
