import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema,
  type BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest,
} from "./bulk-upsert-location-custom-attributes-request-location-custom-attribute-upsert-request.js";

export type BulkUpsertLocationCustomAttributesRequest = {
  values: Record<string, BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>;
};

export const bulkUpsertLocationCustomAttributesRequestSchema: Schema<BulkUpsertLocationCustomAttributesRequest> =
  s.object<BulkUpsertLocationCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema),
    ),
  });
