import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomAttributeDefinitionVisibility = {
  VisibilityHidden: "VISIBILITY_HIDDEN",
  VisibilityReadOnly: "VISIBILITY_READ_ONLY",
  VisibilityReadWriteValues: "VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CustomAttributeDefinitionVisibility =
  | (typeof CustomAttributeDefinitionVisibility)[keyof typeof CustomAttributeDefinitionVisibility]
  | (string & {});

export const customAttributeDefinitionVisibilitySchema: EnumSchema<CustomAttributeDefinitionVisibility> =
  s.enumOf<CustomAttributeDefinitionVisibility>(CustomAttributeDefinitionVisibility);
