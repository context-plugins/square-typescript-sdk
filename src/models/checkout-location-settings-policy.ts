import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutLocationSettingsPolicy = {
  uid?: string | null;
  title?: string | null;
  description?: string | null;
};

export const checkoutLocationSettingsPolicySchema: Schema<CheckoutLocationSettingsPolicy> =
  s.object<CheckoutLocationSettingsPolicy>({
    uid: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
  });
