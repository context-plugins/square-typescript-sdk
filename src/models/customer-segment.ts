import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerSegment = {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export const customerSegmentSchema: Schema<CustomerSegment> = s.object<CustomerSegment>({
  id: s.optional(s.string()),
  name: s.string(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
