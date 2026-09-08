import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the state of a tracked item quantity in the lifecycle of goods. */
export const InventoryState = {
  /**
   * The related quantity of items are in a custom state. **READ-ONLY**: the Inventory API cannot
   * move quantities to or from this state.
   */
  Custom: "CUSTOM",
  /** The related quantity of items are on hand and available for sale. */
  InStock: "IN_STOCK",
  /**
   * The related quantity of items were sold as part of an itemized transaction. Quantities in the
   * `SOLD` state are no longer tracked.
   */
  Sold: "SOLD",
  /**
   * The related quantity of items were returned through the Square Point of Sale application, but
   * are not yet available for sale. **READ-ONLY**: the Inventory API cannot move quantities to or
   * from this state.
   */
  ReturnedByCustomer: "RETURNED_BY_CUSTOMER",
  /**
   * The related quantity of items are on hand, but not currently available for sale. **READ-ONLY**:
   * the Inventory API cannot move quantities to or from this state.
   */
  ReservedForSale: "RESERVED_FOR_SALE",
  /**
   * The related quantity of items were sold online. **READ-ONLY**: the Inventory API cannot move
   * quantities to or from this state.
   */
  SoldOnline: "SOLD_ONLINE",
  /**
   * The related quantity of items were ordered from a vendor but not yet received. **READ-ONLY**:
   * the Inventory API cannot move quantities to or from this state.
   */
  OrderedFromVendor: "ORDERED_FROM_VENDOR",
  /**
   * The related quantity of items were received from a vendor but are not yet available for sale.
   * **READ-ONLY**: the Inventory API cannot move quantities to or from this state.
   */
  ReceivedFromVendor: "RECEIVED_FROM_VENDOR",
  /**
   * Replaced by `IN_TRANSIT` to represent quantities of items that are in transit between
   * locations.
   */
  InTransitTo: "IN_TRANSIT_TO",
  /**
   * A placeholder indicating that the related quantity of items are not currently tracked in
   * Square. Transferring quantities from the `NONE` state to a tracked state (e.g., `IN_STOCK`)
   * introduces stock into the system.
   */
  None: "NONE",
  /** The related quantity of items are lost or damaged and cannot be sold. */
  Waste: "WASTE",
  /**
   * The related quantity of items were returned but not linked to a previous transaction. Unlinked
   * returns are not tracked in Square. Transferring a quantity from `UNLINKED_RETURN` to a tracked
   * state (e.g., `IN_STOCK`) introduces new stock into the system.
   */
  UnlinkedReturn: "UNLINKED_RETURN",
  /**
   * The related quantity of items that are part of a composition consisting one or more components.
   */
  Composed: "COMPOSED",
  /** The related quantity of items that are part of a component. */
  Decomposed: "DECOMPOSED",
  /**
   * This state is not supported by this version of the Square API. We recommend that you upgrade
   * the client to use the appropriate version of the Square API supporting this state.
   */
  SupportedByNewerVersion: "SUPPORTED_BY_NEWER_VERSION",
  /**
   * The related quantity of items are in transit between locations. **READ-ONLY:** the Inventory
   * API cannot currently be used to move quantities to or from this inventory state.
   */
  InTransit: "IN_TRANSIT",
  /** The related quantity of items are untracked. */
  Untracked: "UNTRACKED",
} as const;
export type InventoryState = (typeof InventoryState)[keyof typeof InventoryState] | (string & {});

export const inventoryStateSchema: EnumSchema<InventoryState> = s.enumOf<InventoryState>(InventoryState);
