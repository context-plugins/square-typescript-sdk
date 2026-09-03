import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderStateSchema, type OrderState } from "./order-state.js";

export type OrderUpdated = {
  orderId?: string | null;
  version?: number;
  locationId?: string | null;
  state?: OrderState;
  createdAt?: string;
  updatedAt?: string;
};

export const orderUpdatedSchema: Schema<OrderUpdated> = s.object<OrderUpdated>({
  orderId: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  locationId: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => orderStateSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    orderId: "order_id",
    locationId: "location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
