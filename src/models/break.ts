import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Break = {
  id?: string;
  startAt: string;
  endAt?: string | null;
  breakTypeId: string;
  name: string;
  expectedDuration: string;
  isPaid: boolean;
};

export const breakSchema: Schema<Break> = s.object<Break>({
  id: s.optional(s.string()),
  startAt: s.string(),
  endAt: s.optionalNullable(s.string()),
  breakTypeId: s.string(),
  name: s.string(),
  expectedDuration: s.string(),
  isPaid: s.boolean(),
  _keysMap: {
    startAt: "start_at",
    endAt: "end_at",
    breakTypeId: "break_type_id",
    expectedDuration: "expected_duration",
    isPaid: "is_paid",
  },
});
