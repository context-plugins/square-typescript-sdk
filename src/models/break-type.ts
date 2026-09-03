import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BreakType = {
  id?: string;
  locationId: string;
  breakName: string;
  expectedDuration: string;
  isPaid: boolean;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
};

export const breakTypeSchema: Schema<BreakType> = s.object<BreakType>({
  id: s.optional(s.string()),
  locationId: s.string(),
  breakName: s.string(),
  expectedDuration: s.string(),
  isPaid: s.boolean(),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    locationId: "location_id",
    breakName: "break_name",
    expectedDuration: "expected_duration",
    isPaid: "is_paid",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
