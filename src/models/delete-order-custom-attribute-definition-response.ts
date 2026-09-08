import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a response from deleting an order custom attribute definition. */
export type DeleteOrderCustomAttributeDefinitionResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteOrderCustomAttributeDefinitionResponseSchema: Schema<DeleteOrderCustomAttributeDefinitionResponse> =
  s.object<DeleteOrderCustomAttributeDefinitionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
