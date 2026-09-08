import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

/** Represents one upsert within the bulk operation. */
export type BulkUpsertOrderCustomAttributesRequestUpsertCustomAttribute = {
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this request, used to ensure idempotency. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
  /** The ID of the target [order](entity:Order). */
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
