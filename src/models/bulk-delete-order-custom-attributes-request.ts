import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema,
  type BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute,
} from "./bulk-delete-order-custom-attributes-request-delete-custom-attribute.js";

export type BulkDeleteOrderCustomAttributesRequest = {
  values: Record<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>;
};

export const bulkDeleteOrderCustomAttributesRequestSchema: Schema<BulkDeleteOrderCustomAttributesRequest> =
  s.object<BulkDeleteOrderCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema),
    ),
  });
