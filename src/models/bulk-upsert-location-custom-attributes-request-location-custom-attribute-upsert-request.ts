import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type BulkUpsertLocationCustomAttributesRequestLocationCustomAttributeUpsertRequest = {
  locationId: string;
  customAttribute: CustomAttribute;
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
