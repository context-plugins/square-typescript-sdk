import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  upsertOrderCustomAttributeResponseSchema,
  type UpsertOrderCustomAttributeResponse,
} from "./upsert-order-custom-attribute-response.js";

/** Represents a response from a bulk upsert of order custom attributes. */
export type BulkUpsertOrderCustomAttributesResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** A map of responses that correspond to individual upsert operations for custom attributes. */
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
