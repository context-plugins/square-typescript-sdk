import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type CreateCustomerCustomAttributeDefinitionRequest = {
  customAttributeDefinition: CustomAttributeDefinition;
  idempotencyKey?: string;
};

export const createCustomerCustomAttributeDefinitionRequestSchema: Schema<CreateCustomerCustomAttributeDefinitionRequest> =
  s.object<CreateCustomerCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optional(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
