import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCategorySchema, type ErrorCategory } from "./error-category.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

export type Error = {
  category: ErrorCategory;
  code: ErrorCode;
  detail?: string;
  field?: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  category: errorCategorySchema,
  code: errorCodeSchema,
  detail: s.optional(s.string()),
  field: s.optional(s.string()),
});
