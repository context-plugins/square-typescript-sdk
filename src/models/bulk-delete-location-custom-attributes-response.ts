import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema,
  type BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse,
} from "./bulk-delete-location-custom-attributes-response-location-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkDeleteLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkDeleteLocationCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual delete
 * request.
 */
export type BulkDeleteLocationCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual delete requests. Each response has the same
   * key as the corresponding request.
   */
  values: Record<string, BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkDeleteLocationCustomAttributesResponseSchema: Schema<BulkDeleteLocationCustomAttributesResponse> =
  s.object<BulkDeleteLocationCustomAttributesResponse>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
