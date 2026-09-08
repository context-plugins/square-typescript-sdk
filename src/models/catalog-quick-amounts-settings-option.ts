import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines a seller's option on Quick Amounts feature. */
export const CatalogQuickAmountsSettingsOption = {
  /** Option for seller to disable Quick Amounts. */
  Disabled: "DISABLED",
  /** Option for seller to choose manually created Quick Amounts. */
  Manual: "MANUAL",
  /** Option for seller to choose automatically created Quick Amounts. */
  Auto: "AUTO",
} as const;
export type CatalogQuickAmountsSettingsOption =
  | (typeof CatalogQuickAmountsSettingsOption)[keyof typeof CatalogQuickAmountsSettingsOption]
  | (string & {});

export const catalogQuickAmountsSettingsOptionSchema: EnumSchema<CatalogQuickAmountsSettingsOption> =
  s.enumOf<CatalogQuickAmountsSettingsOption>(CatalogQuickAmountsSettingsOption);
