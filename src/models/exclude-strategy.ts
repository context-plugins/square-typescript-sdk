import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExcludeStrategy = {
  LeastExpensive: "LEAST_EXPENSIVE",
  MostExpensive: "MOST_EXPENSIVE",
  MostExpensiveLowestValue: "MOST_EXPENSIVE_LOWEST_VALUE",
} as const;
export type ExcludeStrategy = (typeof ExcludeStrategy)[keyof typeof ExcludeStrategy] | (string & {});

export const excludeStrategySchema: EnumSchema<ExcludeStrategy> = s.enumOf<ExcludeStrategy>(ExcludeStrategy);
