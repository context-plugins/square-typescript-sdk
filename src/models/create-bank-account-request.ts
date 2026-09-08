import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request object for linking a bank account to a Square account */
export type CreateBankAccountRequest = {
  /**
   * Unique ID. For more information, see the
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /**
   * The ID of the source that represents the bank account information to be stored. This field
   * accepts the payment token created by WebSDK
   */
  sourceId: string;
  /** The ID of the customer associated with the bank account to be stored. */
  customerId?: string;
};

export const createBankAccountRequestSchema: Schema<CreateBankAccountRequest> =
  s.object<CreateBankAccountRequest>({
    idempotencyKey: s.string(),
    sourceId: s.string(),
    customerId: s.optional(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      sourceId: "source_id",
      customerId: "customer_id",
    },
  });
