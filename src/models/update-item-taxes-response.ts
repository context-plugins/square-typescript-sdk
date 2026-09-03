import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateItemTaxesResponse = {
  errors?: Error[];
  updatedAt?: string;
};

export const updateItemTaxesResponseSchema: Schema<UpdateItemTaxesResponse> =
  s.object<UpdateItemTaxesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
