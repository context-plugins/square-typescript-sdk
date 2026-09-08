import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema,
  type BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute,
} from "./bulk-upsert-order-custom-attributes-request-upsert-custom-attribute.js";

/** Represents a bulk upsert request for one or more order custom attributes. */
export type BulkUpsertOrderCustomAttributesRequest = {
  /** A map of requests that correspond to individual upsert operations for custom attributes. */
  values: Record<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>;
};

export const bulkUpsertOrderCustomAttributesRequestSchema: Schema<BulkUpsertOrderCustomAttributesRequest> =
  s.object<BulkUpsertOrderCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema),
    ),
  });
