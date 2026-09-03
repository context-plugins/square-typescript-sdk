import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest = {
  key?: string;
};

export const bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema: Schema<BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest> =
  s.object<BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>({
    key: s.optional(s.string()),
  });
