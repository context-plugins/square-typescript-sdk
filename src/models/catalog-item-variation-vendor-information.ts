import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** Information about the vendor of an item variation. */
export type CatalogItemVariationVendorInformation = {
  /**
   * ID of the [Vendor](entity:Vendor) linked to a default cost of this product. When the product is
   * added to a purchase order, the default cost is pre-filled. This field is not validated. Clients
   * should gracefully handle cases where the vendor_id does not match any existing vendor.
   */
  vendorId?: string | null;
  /**
   * Unique identifier of this product in the specified vendor's' inventory system. When the product
   * is added to a purchase order, the vendor code is pre-filled based on the selected vendor.
   */
  vendorCode?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  unitCostMoney?: Money;
};

export const catalogItemVariationVendorInformationSchema: Schema<CatalogItemVariationVendorInformation> =
  s.object<CatalogItemVariationVendorInformation>({
    vendorId: s.optionalNullable(s.string()),
    vendorCode: s.optionalNullable(s.string()),
    unitCostMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      vendorId: "vendor_id",
      vendorCode: "vendor_code",
      unitCostMoney: "unit_cost_money",
    },
  });
