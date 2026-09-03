import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsSchema,
  type CheckoutMerchantSettings,
} from "./checkout-merchant-settings.js";

export type MerchantSettingsUpdatedEventObject = {
  merchantSettings?: CheckoutMerchantSettings;
};

export const merchantSettingsUpdatedEventObjectSchema: Schema<MerchantSettingsUpdatedEventObject> =
  s.object<MerchantSettingsUpdatedEventObject>({
    merchantSettings: s.optional(s.lazy(() => checkoutMerchantSettingsSchema)),
    _keysMap: {
      merchantSettings: "merchant_settings",
    },
  });
