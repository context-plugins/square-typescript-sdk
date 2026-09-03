import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InventoryAdjustmentReasonIdType = {
  Received: "RECEIVED",
  Damaged: "DAMAGED",
  Theft: "THEFT",
  Lost: "LOST",
  Returned: "RETURNED",
  SpoilageWaste: "SPOILAGE_WASTE",
  SamplesPromotional: "SAMPLES_PROMOTIONAL",
  InternalUse: "INTERNAL_USE",
  VendorReturn: "VENDOR_RETURN",
  ProductionWaste: "PRODUCTION_WASTE",
  Sale: "SALE",
  Recount: "RECOUNT",
  Transfer: "TRANSFER",
  InTransit: "IN_TRANSIT",
  CanceledSale: "CANCELED_SALE",
  Custom: "CUSTOM",
} as const;
export type InventoryAdjustmentReasonIdType =
  | (typeof InventoryAdjustmentReasonIdType)[keyof typeof InventoryAdjustmentReasonIdType]
  | (string & {});

export const inventoryAdjustmentReasonIdTypeSchema: EnumSchema<InventoryAdjustmentReasonIdType> =
  s.enumOf<InventoryAdjustmentReasonIdType>(InventoryAdjustmentReasonIdType);
