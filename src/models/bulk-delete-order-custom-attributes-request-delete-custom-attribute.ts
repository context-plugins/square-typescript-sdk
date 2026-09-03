import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute = {
  key?: string;
  orderId: string;
};

export const bulkDeleteOrderCustomAttributesRequestDeleteCustomAttributeSchema: Schema<BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute> =
  s.object<BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute>({
    key: s.optional(s.string()),
    orderId: s.string(),
    _keysMap: {
      orderId: "order_id",
    },
  });
