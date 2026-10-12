import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CheckoutLocationSettingsTipping = {
  /**
   * Set three custom percentage amounts that buyers can select at checkout. If Smart Tip is
   * enabled, this only applies to transactions totaling $10 or more.
   */
  percentages?: number[] | null;
  /**
   * Enables Smart Tip Amounts. If Smart Tip Amounts is enabled, tipping works as follows: If a
   * transaction is less than $10, the available tipping options include No Tip, $1, $2, or $3. If a
   * transaction is $10 or more, the available tipping options include No Tip, 15%, 20%, or 25%. You
   * can set custom percentage amounts with the `percentages` field.
   */
  smartTippingEnabled?: boolean | null;
  /**
   * Set the pre-selected percentage amounts that appear at checkout. If Smart Tip is enabled, this
   * only applies to transactions totaling $10 or more.
   */
  defaultPercent?: number | null;
  /** Show the Smart Tip Amounts for this location. */
  smartTips?: Money[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  defaultSmartTip?: Money;
};

export const checkoutLocationSettingsTippingSchema: Schema<CheckoutLocationSettingsTipping> =
  s.object<CheckoutLocationSettingsTipping>({
    percentages: s.optionalNullable(s.array(s.int())),
    smartTippingEnabled: s.optionalNullable(s.boolean()),
    defaultPercent: s.optionalNullable(s.int()),
    smartTips: s.optionalNullable(s.array(s.lazy(() => moneySchema))),
    defaultSmartTip: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      smartTippingEnabled: "smart_tipping_enabled",
      defaultPercent: "default_percent",
      smartTips: "smart_tips",
      defaultSmartTip: "default_smart_tip",
    },
  });
