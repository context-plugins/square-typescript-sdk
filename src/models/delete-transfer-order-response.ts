import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Response for deleting a transfer order */
export type DeleteTransferOrderResponse = {
  /** Any errors that occurred during the request */
  errors?: Error[];
};

export const deleteTransferOrderResponseSchema: Schema<DeleteTransferOrderResponse> =
  s.object<DeleteTransferOrderResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
