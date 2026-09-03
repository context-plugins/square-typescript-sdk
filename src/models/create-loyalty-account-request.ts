import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type CreateLoyaltyAccountRequest = {
  loyaltyAccount: LoyaltyAccount;
  idempotencyKey: string;
};

export const createLoyaltyAccountRequestSchema: Schema<CreateLoyaltyAccountRequest> =
  s.object<CreateLoyaltyAccountRequest>({
    loyaltyAccount: loyaltyAccountSchema,
    idempotencyKey: s.string(),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
      idempotencyKey: "idempotency_key",
    },
  });
