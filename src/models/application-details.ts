import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  applicationDetailsExternalSquareProductSchema,
  type ApplicationDetailsExternalSquareProduct,
} from "./application-details-external-square-product.js";

export type ApplicationDetails = {
  squareProduct?: ApplicationDetailsExternalSquareProduct;
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
