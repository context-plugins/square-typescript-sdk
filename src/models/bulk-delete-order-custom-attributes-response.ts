import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deleteOrderCustomAttributeResponseSchema,
  type DeleteOrderCustomAttributeResponse,
} from "./delete-order-custom-attribute-response.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteOrderCustomAttributesResponse = {
  errors?: Error[];
  values: Record<string, DeleteOrderCustomAttributeResponse>;
};

export const bulkDeleteOrderCustomAttributesResponseSchema: Schema<BulkDeleteOrderCustomAttributesResponse> =
  s.object<BulkDeleteOrderCustomAttributesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    values: s.record(
      s.string(),
      s.lazy(() => deleteOrderCustomAttributeResponseSchema),
    ),
  });
