import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";

export type CreateBreakTypeRequest = {
  idempotencyKey?: string;
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
