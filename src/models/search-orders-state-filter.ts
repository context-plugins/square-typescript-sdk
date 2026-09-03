import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

export type SearchOrdersStateFilter = {
  states: OrderState[];
};

export const searchOrdersStateFilterSchema: Schema<SearchOrdersStateFilter> =
  s.object<SearchOrdersStateFilter>({
    states: s.array(s.lazy(() => orderStateSchema)),
  });
