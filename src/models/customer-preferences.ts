import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents communication preferences for the customer profile. */
export type CustomerPreferences = {
  /**
   * Indicates whether the customer has unsubscribed from marketing campaign emails. A value of
   * `true` means that the customer chose to opt out of email marketing from the current Square
   * seller or from all Square sellers. This value is read-only from the Customers API.
   */
  emailUnsubscribed?: boolean | null;
};

export const customerPreferencesSchema: Schema<CustomerPreferences> = s.object<CustomerPreferences>({
  emailUnsubscribed: s.optionalNullable(s.boolean()),
  _keysMap: {
    emailUnsubscribed: "email_unsubscribed",
  },
});
