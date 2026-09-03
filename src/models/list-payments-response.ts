import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { paymentSchema, type Payment } from "./payment.js";

export type ListPaymentsResponse = {
  errors?: Error[];
  payments?: Payment[];
  cursor?: string;
};

export const listPaymentsResponseSchema: Schema<ListPaymentsResponse> = s.object<ListPaymentsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  payments: s.optional(s.array(s.lazy(() => paymentSchema))),
  cursor: s.optional(s.string()),
});
