import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteTransferOrderResponse = {
  errors?: Error[];
};

export const deleteTransferOrderResponseSchema: Schema<DeleteTransferOrderResponse> =
  s.object<DeleteTransferOrderResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
