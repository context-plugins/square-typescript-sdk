import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applicationDetailsExternalSquareProductSchema,
  type ApplicationDetailsExternalSquareProduct,
} from "./application-details-external-square-product.js";

/** Details about the application that took the payment. */
export type ApplicationDetails = {
  /** A list of products to return to external callers. */
  squareProduct?: ApplicationDetailsExternalSquareProduct;
  /**
   * The Square ID assigned to the application used to take the payment. Application developers can
   * use this information to identify payments that their application processed. For example, if a
   * developer uses a custom application to process payments, this field contains the application ID
   * from the Developer Dashboard. If a seller uses a [Square App
   * Marketplace](https://developer.squareup.com/docs/app-marketplace) application to process
   * payments, the field contains the corresponding application ID.
   */
  applicationId?: string | null;
};

export const applicationDetailsSchema: Schema<ApplicationDetails> = s.object<ApplicationDetails>({
  squareProduct: s.optional(s.lazy(() => applicationDetailsExternalSquareProductSchema)),
  applicationId: s.optionalNullable(s.string()),
  _keysMap: {
    squareProduct: "square_product",
    applicationId: "application_id",
  },
});
