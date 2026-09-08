import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema,
  type BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse,
} from "./bulk-upsert-location-custom-attributes-response-location-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a
 * [BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
 * response, which contains a map of responses that each corresponds to an individual upsert
 * request.
 */
export type BulkUpsertLocationCustomAttributesResponse = {
  /**
   * A map of responses that correspond to individual upsert requests. Each response has the same ID
   * as the corresponding request and contains either a `location_id` and `custom_attribute` or an
   * `errors` field.
   */
  values?: Record<string, BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse>;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const bulkUpsertLocationCustomAttributesResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponse> =
  s.object<BulkUpsertLocationCustomAttributesResponse>({
    values: s.optional(
      s.record(
        s.string(),
        s.lazy(() => bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema),
      ),
    ),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
