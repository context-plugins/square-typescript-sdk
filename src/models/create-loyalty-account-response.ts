import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyAccountSchema, type LoyaltyAccount } from "./loyalty-account.js";

export type CreateLoyaltyAccountResponse = {
  errors?: Error[];
  loyaltyAccount?: LoyaltyAccount;
};

export const createLoyaltyAccountResponseSchema: Schema<CreateLoyaltyAccountResponse> =
  s.object<CreateLoyaltyAccountResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyAccount: s.optional(s.lazy(() => loyaltyAccountSchema)),
    _keysMap: {
      loyaltyAccount: "loyalty_account",
    },
  });
