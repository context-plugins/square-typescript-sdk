import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorCategorySchema, type ErrorCategory } from "./error-category.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

/**
 * Represents an error encountered during a request to the Connect API.
 *
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more
 * information.
 */
export type Error = {
  /**
   * Indicates which high-level category of error has occurred during a request to the Connect API.
   */
  category: ErrorCategory;
  /** Indicates the specific error that occurred during a request to a Square API. */
  code: ErrorCode;
  /** A human-readable description of the error for debugging purposes. */
  detail?: string;
  /** The name of the field provided in the original request (if any) that the error pertains to. */
  field?: string;
};

export const errorSchema: Schema<Error> = s.object<Error>({
  category: errorCategorySchema,
  code: errorCodeSchema,
  detail: s.optional(s.string()),
  field: s.optional(s.string()),
});
