import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";

/** Represents information about the application used to generate a change. */
export type SourceApplication = {
  /** Indicates the Square product used to generate a change. */
  product?: Product;
  /**
   * __Read only__ The Square-assigned ID of the application. This field is used only if the
   * [product](entity:Product) type is `EXTERNAL_API`.
   */
  applicationId?: string | null;
  /**
   * __Read only__ The display name of the application (for example, `"Custom Application"` or
   * `"Square POS 4.74 for Android"`).
   */
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
