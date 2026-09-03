import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema,
  type BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest,
} from "./bulk-delete-location-custom-attributes-request-location-custom-attribute-delete-request.js";

export type BulkDeleteLocationCustomAttributesRequest = {
  values: Record<string, BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>;
};

export const bulkDeleteLocationCustomAttributesRequestSchema: Schema<BulkDeleteLocationCustomAttributesRequest> =
  s.object<BulkDeleteLocationCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema),
    ),
  });
