import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteBookingCustomAttributeResponse = {
  errors?: Error[];
};

export const deleteBookingCustomAttributeResponseSchema: Schema<DeleteBookingCustomAttributeResponse> =
  s.object<DeleteBookingCustomAttributeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
