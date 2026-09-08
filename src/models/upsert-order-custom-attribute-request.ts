import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

/** Represents an upsert request for an order custom attribute. */
export type UpsertOrderCustomAttributeRequest = {
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
};

export const upsertOrderCustomAttributeRequestSchema: Schema<UpsertOrderCustomAttributeRequest> =
  s.object<UpsertOrderCustomAttributeRequest>({
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
