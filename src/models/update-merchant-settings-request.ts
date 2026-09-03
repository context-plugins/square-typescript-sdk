import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutMerchantSettingsSchema,
  type CheckoutMerchantSettings,
} from "./checkout-merchant-settings.js";

export type UpdateMerchantSettingsRequest = {
  merchantSettings: CheckoutMerchantSettings;
};

export const updateMerchantSettingsRequestSchema: Schema<UpdateMerchantSettingsRequest> =
  s.object<UpdateMerchantSettingsRequest>({
    merchantSettings: checkoutMerchantSettingsSchema,
    _keysMap: {
      merchantSettings: "merchant_settings",
    },
  });
