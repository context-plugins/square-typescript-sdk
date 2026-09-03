import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type CreateCustomerCardRequest = {
  cardNonce: string;
  billingAddress?: Address;
  cardholderName?: string;
  verificationToken?: string;
};

export const createCustomerCardRequestSchema: Schema<CreateCustomerCardRequest> =
  s.object<CreateCustomerCardRequest>({
    cardNonce: s.string(),
    billingAddress: s.optional(s.lazy(() => addressSchema)),
    cardholderName: s.optional(s.string()),
    verificationToken: s.optional(s.string()),
    _keysMap: {
      cardNonce: "card_nonce",
      billingAddress: "billing_address",
      cardholderName: "cardholder_name",
      verificationToken: "verification_token",
    },
  });
