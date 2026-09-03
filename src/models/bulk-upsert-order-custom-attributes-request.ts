import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema,
  type BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute,
} from "./bulk-upsert-order-custom-attributes-request-upsert-custom-attribute.js";

export type BulkUpsertOrderCustomAttributesRequest = {
  values: Record<string, BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>;
};

export const bulkUpsertOrderCustomAttributesRequestSchema: Schema<BulkUpsertOrderCustomAttributesRequest> =
  s.object<BulkUpsertOrderCustomAttributesRequest>({
    values: s.record(
      s.string(),
      s.lazy(() => bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema),
    ),
  });
