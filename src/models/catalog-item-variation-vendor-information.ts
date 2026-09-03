import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogItemVariationVendorInformation = {
  vendorId?: string | null;
  vendorCode?: string | null;
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
