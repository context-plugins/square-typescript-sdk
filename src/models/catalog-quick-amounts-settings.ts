import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogQuickAmountSchema, type CatalogQuickAmount } from "./catalog-quick-amount.js";
import {
  catalogQuickAmountsSettingsOptionSchema,
  type CatalogQuickAmountsSettingsOption,
} from "./catalog-quick-amounts-settings-option.js";

export type CatalogQuickAmountsSettings = {
  option: CatalogQuickAmountsSettingsOption;
  eligibleForAutoAmounts?: boolean | null;
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
