import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderSource = {
  name?: string | null;
};

export const orderSourceSchema: Schema<OrderSource> = s.object<OrderSource>({
  name: s.optionalNullable(s.string()),
});
