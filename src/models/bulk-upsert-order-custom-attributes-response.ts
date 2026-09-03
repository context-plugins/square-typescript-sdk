import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  upsertOrderCustomAttributeResponseSchema,
  type UpsertOrderCustomAttributeResponse,
} from "./upsert-order-custom-attribute-response.js";

export type BulkUpsertOrderCustomAttributesResponse = {
  errors?: Error[];
  values: Record<string, UpsertOrderCustomAttributeResponse>;
};

export const bulkUpsertOrderCustomAttributesResponseSchema: Schema<BulkUpsertOrderCustomAttributesResponse> =
  s.object<BulkUpsertOrderCustomAttributesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    values: s.record(
      s.string(),
      s.lazy(() => upsertOrderCustomAttributeResponseSchema),
    ),
  });
