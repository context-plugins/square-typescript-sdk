import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Job = {
  id?: string;
  title?: string | null;
  isTipEligible?: boolean | null;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
};

export const jobSchema: Schema<Job> = s.object<Job>({
  id: s.optional(s.string()),
  title: s.optionalNullable(s.string()),
  isTipEligible: s.optionalNullable(s.boolean()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  version: s.optional(s.number()),
  _keysMap: {
    isTipEligible: "is_tip_eligible",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
