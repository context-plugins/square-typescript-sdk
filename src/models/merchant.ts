import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";
import { merchantStatusSchema, type MerchantStatus } from "./merchant-status.js";

export type Merchant = {
  id?: string;
  businessName?: string | null;
  country: Country;
  languageCode?: string | null;
  currency?: Currency;
  status?: MerchantStatus;
  mainLocationId?: string | null;
  createdAt?: string;
};

export const merchantSchema: Schema<Merchant> = s.object<Merchant>({
  id: s.optional(s.string()),
  businessName: s.optionalNullable(s.string()),
  country: countrySchema,
  languageCode: s.optionalNullable(s.string()),
  currency: s.optional(s.lazy(() => currencySchema)),
  status: s.optional(s.lazy(() => merchantStatusSchema)),
  mainLocationId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  _keysMap: {
    businessName: "business_name",
    languageCode: "language_code",
    mainLocationId: "main_location_id",
    createdAt: "created_at",
  },
});
