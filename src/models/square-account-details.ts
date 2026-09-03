import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type SquareAccountDetails = {
  paymentSourceToken?: string | null;
  errors?: Error[] | null;
};

export const squareAccountDetailsSchema: Schema<SquareAccountDetails> = s.object<SquareAccountDetails>({
  paymentSourceToken: s.optionalNullable(s.string()),
  errors: s.optionalNullable(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    paymentSourceToken: "payment_source_token",
  },
});
