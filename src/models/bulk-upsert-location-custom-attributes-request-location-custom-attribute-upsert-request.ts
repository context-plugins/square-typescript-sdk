import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

/**
 * Represents an individual upsert request in a
 * [BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
 * request. An individual request contains a location ID, the custom attribute to create or update,
 * and an optional idempotency key.
 */
export type BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest = {
  /** The ID of the target [location](entity:Location). */
  locationId: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute: CustomAttribute;
  /**
   * A unique identifier for this individual upsert request, used to ensure idempotency. For more
   * information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string | null;
};

export const bulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequestSchema: Schema<BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest> =
  s.object<BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest>({
    locationId: s.string(),
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      locationId: "location_id",
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
