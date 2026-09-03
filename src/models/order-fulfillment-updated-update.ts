import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";

export type OrderFulfillmentUpdatedUpdate = {
  fulfillmentUid?: string | null;
  oldState?: FulfillmentState;
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
