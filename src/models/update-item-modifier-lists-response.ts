import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateItemModifierListsResponse = {
  errors?: Error[];
  updatedAt?: string;
};

export const updateItemModifierListsResponseSchema: Schema<UpdateItemModifierListsResponse> =
  s.object<UpdateItemModifierListsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
