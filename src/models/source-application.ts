import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";

export type SourceApplication = {
  product?: Product;
  applicationId?: string | null;
  name?: string | null;
};

export const sourceApplicationSchema: Schema<SourceApplication> = s.object<SourceApplication>({
  product: s.optional(s.lazy(() => productSchema)),
  applicationId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  _keysMap: {
    applicationId: "application_id",
  },
});
