import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type UpdateLocationCustomAttributeDefinitionRequest = {
  customAttributeDefinition: CustomAttributeDefinition;
  idempotencyKey?: string | null;
};

export const updateLocationCustomAttributeDefinitionRequestSchema: Schema<UpdateLocationCustomAttributeDefinitionRequest> =
  s.object<UpdateLocationCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
