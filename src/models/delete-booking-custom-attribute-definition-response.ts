import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteBookingCustomAttributeDefinitionResponse = {
  errors?: Error[];
};

export const deleteBookingCustomAttributeDefinitionResponseSchema: Schema<DeleteBookingCustomAttributeDefinitionResponse> =
  s.object<DeleteBookingCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
