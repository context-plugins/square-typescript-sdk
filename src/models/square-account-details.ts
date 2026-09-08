import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Additional details about Square Account payments. */
export type SquareAccountDetails = {
  /** Unique identifier for the payment source used for this payment. */
  paymentSourceToken?: string | null;
  /** Information about errors encountered during the request. */
  errors?: Error[] | null;
};

export const squareAccountDetailsSchema: Schema<SquareAccountDetails> = s.object<SquareAccountDetails>({
  paymentSourceToken: s.optionalNullable(s.string()),
  errors: s.optionalNullable(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    paymentSourceToken: "payment_source_token",
  },
});
