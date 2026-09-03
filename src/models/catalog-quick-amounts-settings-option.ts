import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogQuickAmountsSettingsOption = {
  Disabled: "DISABLED",
  Manual: "MANUAL",
  Auto: "AUTO",
} as const;
export type CatalogQuickAmountsSettingsOption =
  | (typeof CatalogQuickAmountsSettingsOption)[keyof typeof CatalogQuickAmountsSettingsOption]
  | (string & {});

export const catalogQuickAmountsSettingsOptionSchema: EnumSchema<CatalogQuickAmountsSettingsOption> =
  s.enumOf<CatalogQuickAmountsSettingsOption>(CatalogQuickAmountsSettingsOption);
