import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateItemTaxesRequest = {
  /**
   * IDs for the CatalogItems associated with the CatalogTax objects being updated. No more than
   * 1,000 IDs may be provided.
   */
  itemIds: string[];
  /**
   * IDs of the CatalogTax objects to enable. At least one of `taxes_to_enable` or
   * `taxes_to_disable` must be specified.
   */
  taxesToEnable?: string[] | null;
  /**
   * IDs of the CatalogTax objects to disable. At least one of `taxes_to_enable` or
   * `taxes_to_disable` must be specified.
   */
  taxesToDisable?: string[] | null;
};

export const updateItemTaxesRequestSchema: Schema<UpdateItemTaxesRequest> = s.object<UpdateItemTaxesRequest>({
  itemIds: s.array(s.string()),
  taxesToEnable: s.optionalNullable(s.array(s.string())),
  taxesToDisable: s.optionalNullable(s.array(s.string())),
  _keysMap: {
    itemIds: "item_ids",
    taxesToEnable: "taxes_to_enable",
    taxesToDisable: "taxes_to_disable",
  },
});
