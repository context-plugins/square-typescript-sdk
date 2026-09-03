import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest = {
  customerId: string;
  customAttribute: CustomAttribute;
  idempotencyKey?: string | null;
};

export const bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema: Schema<BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest> =
  s.object<BulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest>({
    customerId: s.string(),
    customAttribute: customAttributeSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customerId: "customer_id",
      customAttribute: "custom_attribute",
      idempotencyKey: "idempotency_key",
    },
  });
