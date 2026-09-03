import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse = {
  locationId?: string;
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
