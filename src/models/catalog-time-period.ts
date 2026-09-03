import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogTimePeriod = {
  event?: string | null;
};

export const catalogTimePeriodSchema: Schema<CatalogTimePeriod> = s.object<CatalogTimePeriod>({
  event: s.optionalNullable(s.string()),
});
