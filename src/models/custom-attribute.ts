import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionVisibilitySchema,
  type CustomAttributeDefinitionVisibility,
} from "./custom-attribute-definition-visibility.js";
import {
  customAttributeDefinitionSchema,
  type CustomAttributeDefinition,
} from "./custom-attribute-definition.js";

export type CustomAttribute = {
  key?: string | null;
  value?: Record<string, unknown> | null;
  version?: number;
  visibility?: CustomAttributeDefinitionVisibility;
  definition?: CustomAttributeDefinition;
  updatedAt?: string;
  createdAt?: string;
};

export const customAttributeSchema: Schema<CustomAttribute> = s.object<CustomAttribute>({
  key: s.optionalNullable(s.string()),
  value: s.optionalNullable(s.record(s.string(), s.unknown())),
  version: s.optional(s.number()),
  visibility: s.optional(s.lazy(() => customAttributeDefinitionVisibilitySchema)),
  definition: s.optional(s.lazy(() => customAttributeDefinitionSchema)),
  updatedAt: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  _keysMap: {
    updatedAt: "updated_at",
    createdAt: "created_at",
  },
});
