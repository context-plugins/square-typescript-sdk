import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";

/** A request to create a new `BreakType`. */
export type CreateBreakTypeRequest = {
  /** A unique string value to ensure the idempotency of the operation. */
  idempotencyKey?: string;
  /**
   * A template for a type of [break](entity:Break) that can be added to a
   * [timecard](entity:Timecard), including the expected duration and paid status.
   */
  breakType: BreakType;
};

export const createBreakTypeRequestSchema: Schema<CreateBreakTypeRequest> = s.object<CreateBreakTypeRequest>({
  idempotencyKey: s.optional(s.string()),
  breakType: breakTypeSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
    breakType: "break_type",
  },
});
