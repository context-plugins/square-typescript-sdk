import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The level of permission that a seller or other applications requires to view this custom
 * attribute definition. The `Visibility` field controls who can read and write the custom attribute
 * values and custom attribute definition.
 */
export const CustomAttributeDefinitionVisibility = {
  /**
   * The custom attribute definition and values are hidden from the seller (except on export of all
   * seller data) and other developers.
   */
  VisibilityHidden: "VISIBILITY_HIDDEN",
  /**
   * The seller and other developers can read the custom attribute definition and values on
   * resources.
   */
  VisibilityReadOnly: "VISIBILITY_READ_ONLY",
  /**
   * The seller and other developers can read the custom attribute definition, and can read and
   * write values on resources. A custom attribute definition can only be edited or deleted by the
   * application that created it.
   */
  VisibilityReadWriteValues: "VISIBILITY_READ_WRITE_VALUES",
} as const;
export type CustomAttributeDefinitionVisibility =
  | (typeof CustomAttributeDefinitionVisibility)[keyof typeof CustomAttributeDefinitionVisibility]
  | (string & {});

export const customAttributeDefinitionVisibilitySchema: EnumSchema<CustomAttributeDefinitionVisibility> =
  s.enumOf<CustomAttributeDefinitionVisibility>(CustomAttributeDefinitionVisibility);
