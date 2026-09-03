import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";

export type SearchOrdersFulfillmentFilter = {
  fulfillmentTypes?: FulfillmentType[] | null;
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
