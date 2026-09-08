import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";

/** Filter based on [order fulfillment](entity:Fulfillment) information. */
export type SearchOrdersFulfillmentFilter = {
  /**
   * A list of [fulfillment types](entity:FulfillmentType) to filter for. The list returns orders if
   * any of its fulfillments match any of the fulfillment types listed in this field. See
   * [FulfillmentType](#type-fulfillmenttype) for possible values
   */
  fulfillmentTypes?: FulfillmentType[] | null;
  /**
   * A list of [fulfillment states](entity:FulfillmentState) to filter for. The list returns orders
   * if any of its fulfillments match any of the fulfillment states listed in this field. See
   * [FulfillmentState](#type-fulfillmentstate) for possible values
   */
  fulfillmentStates?: FulfillmentState[] | null;
};

export const searchOrdersFulfillmentFilterSchema: Schema<SearchOrdersFulfillmentFilter> =
  s.object<SearchOrdersFulfillmentFilter>({
    fulfillmentTypes: s.optionalNullable(s.array(s.lazy(() => fulfillmentTypeSchema))),
    fulfillmentStates: s.optionalNullable(s.array(s.lazy(() => fulfillmentStateSchema))),
    _keysMap: {
      fulfillmentTypes: "fulfillment_types",
      fulfillmentStates: "fulfillment_states",
    },
  });
