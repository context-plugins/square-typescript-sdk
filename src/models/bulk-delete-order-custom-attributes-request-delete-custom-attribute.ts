import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents one delete within the bulk operation. */
export type BulkDeleteOrderCustomAttributesRequestDeleteCustomAttribute = {
  /**
   * The key of the custom attribute to delete. This key must match the key of an existing custom
   * attribute definition.
   */
  key?: string;
  /** The ID of the target [order](entity:Order). */
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
