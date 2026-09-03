import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionEventDataObjectSchema,
  type CustomAttributeDefinitionEventDataObject,
} from "./custom-attribute-definition-event-data-object.js";

export type CustomAttributeDefinitionEventData = {
  type?: string | null;
  id?: string;
  object?: CustomAttributeDefinitionEventDataObject;
};

export const customAttributeDefinitionEventDataSchema: Schema<CustomAttributeDefinitionEventData> =
  s.object<CustomAttributeDefinitionEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customAttributeDefinitionEventDataObjectSchema)),
  });
