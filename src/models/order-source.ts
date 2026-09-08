import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents the origination details of an order. */
export type OrderSource = {
  /**
   * The name used to identify the place (physical or digital) that an order originates. If unset,
   * the name defaults to the name of the application that created the order.
   */
  name?: string | null;
};

export const orderSourceSchema: Schema<OrderSource> = s.object<OrderSource>({
  name: s.optionalNullable(s.string()),
});
