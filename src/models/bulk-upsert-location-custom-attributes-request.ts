import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema,
  type BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest,
} from "./bulk-upsert-location-custom-attributes-request-location-custom-attribute-upsert-request.js";

/**
 * Represents a
 * [BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
 * request.
 */
export type BulkUpsertLocationCustomAttributesRequest = {
  /**
   * A map containing 1 to 25 individual upsert requests. For each request, provide an arbitrary ID
   * that is unique for this `BulkUpsertLocationCustomAttributes` request and the information needed
   * to create or update a custom attribute.
   */
  values: Record<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>;
};

export const bulkUpsertLocationCustomAttributesRequestSchema: Schema<BulkUpsertLocationCustomAttributesRequest> =
  s.object<BulkUpsertLocationCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema),
    ),
  });
