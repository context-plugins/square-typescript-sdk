import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema,
  type BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute,
} from "./bulk-delete-order-custom-attributes-request-delete-custom-attribute.js";

/** Represents a bulk delete request for one or more order custom attributes. */
export type BulkDeleteOrderCustomAttributesRequest = {
  /** A map of requests that correspond to individual delete operations for custom attributes. */
  values: Record<string, BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>;
};

export const bulkDeleteOrderCustomAttributesRequestSchema: Schema<BulkDeleteOrderCustomAttributesRequest> =
  s.object<BulkDeleteOrderCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema),
    ),
  });
