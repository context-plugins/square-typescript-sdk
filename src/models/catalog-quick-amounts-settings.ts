import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogQuickAmountSchema, type CatalogQuickAmount } from "./catalog-quick-amount.js";
import {
  catalogQuickAmountsSettingsOptionSchema,
  type CatalogQuickAmountsSettingsOption,
} from "./catalog-quick-amounts-settings-option.js";

/**
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the
 * amounts.
 */
export type CatalogQuickAmountsSettings = {
  /** Determines a seller's option on Quick Amounts feature. */
  option: CatalogQuickAmountsSettingsOption;
  /**
   * Represents location's eligibility for auto amounts The boolean should be consistent with
   * whether there are AUTO amounts in the `amounts`.
   */
  eligibleForAutoAmounts?: boolean | null;
  /** Represents a set of Quick Amounts at this location. */
  amounts?: CatalogQuickAmount[] | null;
};

export const catalogQuickAmountsSettingsSchema: Schema<CatalogQuickAmountsSettings> =
  s.object<CatalogQuickAmountsSettings>({
    option: catalogQuickAmountsSettingsOptionSchema,
    eligibleForAutoAmounts: s.optionalNullable(s.boolean()),
    amounts: s.optionalNullable(s.array(s.lazy(() => catalogQuickAmountSchema))),
    _keysMap: {
      eligibleForAutoAmounts: "eligible_for_auto_amounts",
    },
  });
