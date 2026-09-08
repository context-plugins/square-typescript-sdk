import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

/** A request to create a new loyalty account. */
export type CreateLoyaltyAccountRequest = {
  /**
   * Describes a loyalty account in a [loyalty program](entity:LoyaltyProgram). For more
   * information, see [Create and Retrieve Loyalty
   * Accounts](https://developer.squareup.com/docs/loyalty-api/loyalty-accounts).
   */
  loyaltyAccount: LoyaltyAccount;
  /**
   * A unique string that identifies this `CreateLoyaltyAccount` request. Keys can be any valid
   * string, but must be unique for every request.
   */
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
