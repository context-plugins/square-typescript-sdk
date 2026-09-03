import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type UpsertBookingCustomAttributeRequest = {
  customAttribute: CustomAttribute;
  idempotencyKey?: string | null;
};

export const upsertBookingCustomAttributeRequestSchema: Schema<UpsertBookingCustomAttributeRequest> =
  s.object<UpsertBookingCustomAttributeRequest>({
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
