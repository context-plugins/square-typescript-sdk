import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataObjectSchema,
  type CustomAttributeDefinitionEventDataObject,
} from "./custom-attribute-definition-event-data-object.js";

/**
 * Represents an object in the CustomAttributeDefinition event notification payload that contains
 * the affected custom attribute definition.
 */
export type CustomAttributeDefinitionEventData = {
  /** The type of the event data object. The value is `"custom_attribute_definition"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CustomAttributeDefinitionEventDataObject;
};

export const customAttributeDefinitionEventDataSchema: Schema<CustomAttributeDefinitionEventData> =
  s.object<CustomAttributeDefinitionEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customAttributeDefinitionEventDataObjectSchema)),
  });
