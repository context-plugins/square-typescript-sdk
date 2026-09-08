import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutLocationSettingsPolicy = {
  /**
   * A unique ID to identify the policy when making changes. You must set the UID for policy
   * updates, but it’s optional when setting new policies.
   */
  uid?: string | null;
  /**
   * The title of the policy. This is required when setting the description, though you can update
   * it in a different request.
   */
  title?: string | null;
  /** The description of the policy. */
  description?: string | null;
};

export const checkoutLocationSettingsPolicySchema: Schema<CheckoutLocationSettingsPolicy> =
  s.object<CheckoutLocationSettingsPolicy>({
    uid: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
  });
