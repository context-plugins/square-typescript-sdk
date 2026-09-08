import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents an individual delete request in a
 * [BulkDeleteLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkDeleteLocationCustomAttributes)
 * request. An individual request contains an optional ID of the associated custom attribute
 * definition and optional key of the associated custom attribute definition.
 */
export type BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest = {
  /**
   * The key of the associated custom attribute definition. Represented as a qualified key if the
   * requesting app is not the definition owner.
   */
  key?: string;
};

export const bulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequestSchema: Schema<BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest> =
  s.object<BulkDeleteLocationCustomAttributesRequestLocationCustomAttributeDeleteRequest>({
    key: s.optional(s.string()),
  });
