import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InventoryState = {
  Custom: "CUSTOM",
  InStock: "IN_STOCK",
  Sold: "SOLD",
  ReturnedByCustomer: "RETURNED_BY_CUSTOMER",
  ReservedForSale: "RESERVED_FOR_SALE",
  SoldOnline: "SOLD_ONLINE",
  OrderedFromVendor: "ORDERED_FROM_VENDOR",
  ReceivedFromVendor: "RECEIVED_FROM_VENDOR",
  InTransitTo: "IN_TRANSIT_TO",
  None: "NONE",
  Waste: "WASTE",
  UnlinkedReturn: "UNLINKED_RETURN",
  Composed: "COMPOSED",
  Decomposed: "DECOMPOSED",
  SupportedByNewerVersion: "SUPPORTED_BY_NEWER_VERSION",
  InTransit: "IN_TRANSIT",
  Untracked: "UNTRACKED",
} as const;
export type InventoryState = (typeof InventoryState)[keyof typeof InventoryState] | (string & {});

export const inventoryStateSchema: EnumSchema<InventoryState> = s.enumOf<InventoryState>(InventoryState);
