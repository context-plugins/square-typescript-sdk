import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type FulfillmentRecipient = {
  customerId?: string | null;
  displayName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  address?: Address;
};

export const fulfillmentRecipientSchema: Schema<FulfillmentRecipient> = s.object<FulfillmentRecipient>({
  customerId: s.optionalNullable(s.string()),
  displayName: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  _keysMap: {
    customerId: "customer_id",
    displayName: "display_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
  },
});
