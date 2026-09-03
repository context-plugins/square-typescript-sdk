import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type UpdateMerchantCustomAttributeDefinitionRequest = {
  customAttributeDefinition: CustomAttributeDefinition;
  idempotencyKey?: string | null;
};

export const updateMerchantCustomAttributeDefinitionRequestSchema: Schema<UpdateMerchantCustomAttributeDefinitionRequest> =
  s.object<UpdateMerchantCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
