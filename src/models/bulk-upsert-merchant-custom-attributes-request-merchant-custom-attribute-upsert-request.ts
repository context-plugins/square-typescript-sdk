import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest = {
  merchantId: string;
  customAttribute: CustomAttribute;
  idempotencyKey?: string | null;
};

export const bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest> =
  s.object<BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>({
    merchantId: s.string(),
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      merchantId: "merchant_id",
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
