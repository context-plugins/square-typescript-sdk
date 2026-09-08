import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeEventDataObjectSchema,
  type CustomAttributeEventDataObject,
} from "./custom-attribute-event-data-object.js";

export type CustomAttributeEventData = {
  /** The type of the event data object. The value is `"custom_attribute"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CustomAttributeEventDataObject;
};

export const customAttributeEventDataSchema: Schema<CustomAttributeEventData> =
  s.object<CustomAttributeEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customAttributeEventDataObjectSchema)),
  });
