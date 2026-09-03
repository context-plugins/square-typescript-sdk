import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customAttributeDefinitionVisibilitySchema,
  type CustomAttributeDefinitionVisibility,
} from "./custom-attribute-definition-visibility.js";

export type CustomAttributeDefinition = {
  key?: string | null;
  schema?: Record<string, unknown> | null;
  name?: string | null;
  description?: string | null;
  visibility?: CustomAttributeDefinitionVisibility;
  version?: number;
  updatedAt?: string;
  createdAt?: string;
};

export const customAttributeDefinitionSchema: Schema<CustomAttributeDefinition> =
  s.object<CustomAttributeDefinition>({
    key: s.optionalNullable(s.string()),
    schema: s.optionalNullable(s.record(s.string(), s.unknown())),
    name: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    visibility: s.optional(s.lazy(() => customAttributeDefinitionVisibilitySchema)),
    version: s.optional(s.number()),
    updatedAt: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    _keysMap: {
      updatedAt: "updated_at",
      createdAt: "created_at",
    },
  });
