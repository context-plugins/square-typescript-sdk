import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CheckoutLocationSettingsTipping = {
  percentages?: number[] | null;
  smartTippingEnabled?: boolean | null;
  defaultPercent?: number | null;
  smartTips?: Money[] | null;
  defaultSmartTip?: Money;
};

export const checkoutLocationSettingsTippingSchema: Schema<CheckoutLocationSettingsTipping> =
  s.object<CheckoutLocationSettingsTipping>({
    percentages: s.optionalNullable(s.array(s.number())),
    smartTippingEnabled: s.optionalNullable(s.boolean()),
    defaultPercent: s.optionalNullable(s.number()),
    smartTips: s.optionalNullable(s.array(s.lazy(() => moneySchema))),
    defaultSmartTip: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      smartTippingEnabled: "smart_tipping_enabled",
      defaultPercent: "default_percent",
      smartTips: "smart_tips",
      defaultSmartTip: "default_smart_tip",
    },
  });
