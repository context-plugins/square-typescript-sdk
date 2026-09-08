import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents the tax ID associated with a [customer profile](entity:Customer). The corresponding
 * `tax_ids` field is available only for customers of sellers in EU countries or the United Kingdom.
 * For more information, see [Customer tax
 * IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
 */
export type CustomerTaxIds = {
  /**
   * The EU VAT identification number for the customer. For example, `IE3426675K`. The ID can
   * contain alphanumeric characters only.
   */
  euVat?: string | null;
};

export const customerTaxIdsSchema: Schema<CustomerTaxIds> = s.object<CustomerTaxIds>({
  euVat: s.optionalNullable(s.string()),
  _keysMap: {
    euVat: "eu_vat",
  },
});
