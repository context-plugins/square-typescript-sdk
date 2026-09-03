import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangeBillingAnchorDateRequest = {
  monthlyBillingAnchorDate?: number | null;
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
