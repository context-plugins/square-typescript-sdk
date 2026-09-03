import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutLocationSettingsCoupons = {
  enabled?: boolean | null;
};

export const checkoutLocationSettingsCouponsSchema: Schema<CheckoutLocationSettingsCoupons> =
  s.object<CheckoutLocationSettingsCoupons>({
    enabled: s.optionalNullable(s.boolean()),
  });
