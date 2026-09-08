import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents a response for an individual upsert request in a
 * [BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
 * operation.
 */
export type BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse = {
  /** The ID of the location associated with the custom attribute. */
  locationId?: string;
  /**
   * A custom attribute value. Each custom attribute value has a corresponding
   * `CustomAttributeDefinition` object.
   */
  customAttribute?: CustomAttribute;
  /** Any errors that occurred while processing the individual request. */
  errors?: Error[];
};

export const bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse> =
  s.object<BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse>({
    locationId: s.optional(s.string()),
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      locationId: "location_id",
      customAttribute: "custom_attribute",
    },
  });
