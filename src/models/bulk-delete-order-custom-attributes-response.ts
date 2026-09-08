import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deleteOrderCustomAttributeResponseSchema,
  type DeleteOrderCustomAttributeResponse,
} from "./delete-order-custom-attribute-response.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a response from deleting one or more order custom attributes. */
export type BulkDeleteOrderCustomAttributesResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * A map of responses that correspond to individual delete requests. Each response has the same ID
   * as the corresponding request and contains either a `custom_attribute` or an `errors` field.
   */
  values: Record<string, DeleteOrderCustomAttributeResponse>;
};

export const bulkDeleteOrderCustomAttributesResponseSchema: Schema<BulkDeleteOrderCustomAttributesResponse> =
  s.object<BulkDeleteOrderCustomAttributesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    values: s.record(
      s.string(),
      s.lazy(() => deleteOrderCustomAttributeResponseSchema),
    ),
  });
