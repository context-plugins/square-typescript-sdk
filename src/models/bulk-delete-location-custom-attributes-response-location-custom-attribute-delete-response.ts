import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Represents an individual delete response in a
 * [BulkDeleteLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkDeleteLocationCustomAttributes)
 * request.
 */
export type BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse = {
  /** The ID of the location associated with the custom attribute. */
  locationId?: string;
  /**
   * Errors that occurred while processing the individual LocationCustomAttributeDeleteRequest
   * request
   */
  errors?: Error[];
};

export const bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema: Schema<BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse> =
  s.object<BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>({
    locationId: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      locationId: "location_id",
    },
  });
