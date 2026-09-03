import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerGroup = {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export const customerGroupSchema: Schema<CustomerGroup> = s.object<CustomerGroup>({
  id: s.optional(s.string()),
  name: s.string(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
