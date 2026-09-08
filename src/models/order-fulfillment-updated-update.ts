import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";

/** Information about fulfillment updates. */
export type OrderFulfillmentUpdatedUpdate = {
  /** A unique ID that identifies the fulfillment only within this order. */
  fulfillmentUid?: string | null;
  /** The current state of this fulfillment. */
  oldState?: FulfillmentState;
  /** The current state of this fulfillment. */
  newState?: FulfillmentState;
};

export const orderFulfillmentUpdatedUpdateSchema: Schema<OrderFulfillmentUpdatedUpdate> =
  s.object<OrderFulfillmentUpdatedUpdate>({
    fulfillmentUid: s.optionalNullable(s.string()),
    oldState: s.optional(s.lazy(() => fulfillmentStateSchema)),
    newState: s.optional(s.lazy(() => fulfillmentStateSchema)),
    _keysMap: {
      fulfillmentUid: "fulfillment_uid",
      oldState: "old_state",
      newState: "new_state",
    },
  });
