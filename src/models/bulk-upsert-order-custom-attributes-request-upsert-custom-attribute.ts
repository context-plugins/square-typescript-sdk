import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute = {
  customAttribute: CustomAttribute;
  idempotencyKey?: string | null;
  orderId: string;
};

export const bulkUpsertOrderCustomAttributesRequestUpsertCustomAttributeSchema: Schema<BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute> =
  s.object<BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute>({
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    orderId: s.string(),
    _keysMap: {
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
      orderId: "order_id",
    },
  });
