import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyAccountMapping = {
  id?: string;
  createdAt?: string;
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
