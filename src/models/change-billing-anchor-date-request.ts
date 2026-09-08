import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines input parameters in a request to the
 * [ChangeBillingAnchorDate](api-endpoint:Subscriptions-ChangeBillingAnchorDate) endpoint.
 */
export type ChangeBillingAnchorDateRequest = {
  /** The anchor day for the billing cycle. */
  monthlyBillingAnchorDate?: number | null;
  /**
   * The `YYYY-MM-DD`-formatted date when the scheduled `BILLING_ANCHOR_CHANGE` action takes place
   * on the subscription.
   *
   * When this date is unspecified or falls within the current billing cycle, the billing anchor
   * date is changed immediately.
   */
  effectiveDate?: string | null;
};

export const changeBillingAnchorDateRequestSchema: Schema<ChangeBillingAnchorDateRequest> =
  s.object<ChangeBillingAnchorDateRequest>({
    monthlyBillingAnchorDate: s.optionalNullable(s.number()),
    effectiveDate: s.optionalNullable(s.string()),
    _keysMap: {
      monthlyBillingAnchorDate: "monthly_billing_anchor_date",
      effectiveDate: "effective_date",
    },
  });
