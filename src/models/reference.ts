import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referenceTypeSchema, type ReferenceType } from "./reference-type.js";

export type Reference = {
  type?: ReferenceType;
  id?: string;
};

export const referenceSchema: Schema<Reference> = s.object<Reference>({
  type: s.optional(s.lazy(() => referenceTypeSchema)),
  id: s.optional(s.string()),
});
