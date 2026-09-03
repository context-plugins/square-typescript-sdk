import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerPreferences = {
  emailUnsubscribed?: boolean | null;
};

export const customerPreferencesSchema: Schema<CustomerPreferences> = s.object<CustomerPreferences>({
  emailUnsubscribed: s.optionalNullable(s.boolean()),
  _keysMap: {
    emailUnsubscribed: "email_unsubscribed",
  },
});
