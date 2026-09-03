import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type CreateOrderCustomAttributeDefinitionRequest = {
  customAttributeDefinition: CustomAttributeDefinition;
  idempotencyKey?: string;
};

export const createOrderCustomAttributeDefinitionRequestSchema: Schema<CreateOrderCustomAttributeDefinitionRequest> =
  s.object<CreateOrderCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optional(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
