import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

/** Filter by the current order `state`. */
export type SearchOrdersStateFilter = {
  /** States to filter for. See [OrderState](#type-orderstate) for possible values */
  states: OrderState[];
};

export const searchOrdersStateFilterSchema: Schema<SearchOrdersStateFilter> =
  s.object<SearchOrdersStateFilter>({
    states: s.array(s.lazy(() => orderStateSchema)),
  });
