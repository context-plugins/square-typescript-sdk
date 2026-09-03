import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema,
  type BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse,
} from "./bulk-delete-location-custom-attributes-response-location-custom-attribute-delete-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteLocationCustomAttributesResponse = {
  values: Record<string, BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>;
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
