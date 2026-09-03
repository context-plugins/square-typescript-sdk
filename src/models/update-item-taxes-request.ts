import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateItemTaxesRequest = {
  itemIds: string[];
  taxesToEnable?: string[] | null;
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
