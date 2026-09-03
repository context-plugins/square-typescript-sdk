import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema,
  type BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse,
} from "./bulk-upsert-location-custom-attributes-response-location-custom-attribute-upsert-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkUpsertLocationCustomAttributesResponse = {
  values?: Record<string, BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse>;
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
