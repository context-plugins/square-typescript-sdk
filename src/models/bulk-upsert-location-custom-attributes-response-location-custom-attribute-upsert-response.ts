import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";
import { errorSchema, type Error } from "./error.js";

export type BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse = {
  locationId?: string;
  customAttribute?: CustomAttribute;
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
