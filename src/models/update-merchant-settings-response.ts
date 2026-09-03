import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsSchema,
  type CheckoutMerchantSettings,
} from "./checkout-merchant-settings.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateMerchantSettingsResponse = {
  errors?: Error[];
  merchantSettings?: CheckoutMerchantSettings;
};

export const updateMerchantSettingsResponseSchema: Schema<UpdateMerchantSettingsResponse> =
  s.object<UpdateMerchantSettingsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    merchantSettings: s.optional(s.lazy(() => checkoutMerchantSettingsSchema)),
    _keysMap: {
      merchantSettings: "merchant_settings",
    },
  });
