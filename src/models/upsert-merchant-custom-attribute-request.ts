import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type UpsertMerchantCustomAttributeRequest = {
  customAttribute: CustomAttribute;
  idempotencyKey?: string | null;
};

export const upsertMerchantCustomAttributeRequestSchema: Schema<UpsertMerchantCustomAttributeRequest> =
  s.object<UpsertMerchantCustomAttributeRequest>({
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
