import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type CustomAttributeEventDataObject = {
  customAttribute?: CustomAttribute;
};

export const customAttributeEventDataObjectSchema: Schema<CustomAttributeEventDataObject> =
  s.object<CustomAttributeEventDataObject>({
    customAttribute: s.optional(s.lazy(() => customAttributeSchema)),
    _keysMap: {
      customAttribute: "custom_attribute",
    },
  });
