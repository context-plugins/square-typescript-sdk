import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashAppDetailsSchema, type CashAppDetails } from "./cash-app-details.js";
import { errorSchema, type Error } from "./error.js";
import { lightningDetailsSchema, type LightningDetails } from "./lightning-details.js";

export type DigitalWalletDetails = {
  status?: string | null;
  brand?: string | null;
  cashAppDetails?: CashAppDetails;
  lightningDetails?: LightningDetails;
  errors?: Error[];
};

export const digitalWalletDetailsSchema: Schema<DigitalWalletDetails> = s.object<DigitalWalletDetails>({
  status: s.optionalNullable(s.string()),
  brand: s.optionalNullable(s.string()),
  cashAppDetails: s.optional(s.lazy(() => cashAppDetailsSchema)),
  lightningDetails: s.optional(s.lazy(() => lightningDetailsSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    cashAppDetails: "cash_app_details",
    lightningDetails: "lightning_details",
  },
});
