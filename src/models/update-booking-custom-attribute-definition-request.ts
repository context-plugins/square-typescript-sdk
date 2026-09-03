import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type UpdateBookingCustomAttributeDefinitionRequest = {
  customAttributeDefinition: CustomAttributeDefinition;
  idempotencyKey?: string | null;
};

export const updateBookingCustomAttributeDefinitionRequestSchema: Schema<UpdateBookingCustomAttributeDefinitionRequest> =
  s.object<UpdateBookingCustomAttributeDefinitionRequest>({
    customAttributeDefinition: customAttributeDefinitionSchema,
    idempotencyKey: s.optionalNullable(s.string()),
    _keysMap: {
      customAttributeDefinition: "custom_attribute_definition",
      idempotencyKey: "idempotency_key",
    },
  });
