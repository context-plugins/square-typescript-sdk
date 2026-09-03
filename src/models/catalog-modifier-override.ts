import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogModifierToggleOverrideTypeSchema,
  type CatalogModifierToggleOverrideType,
} from "./catalog-modifier-toggle-override-type.js";

export type CatalogModifierOverride = {
  modifierId: string;
  onByDefault?: boolean | null;
  hiddenOnlineOverride?: CatalogModifierToggleOverrideType;
  onByDefaultOverride?: CatalogModifierToggleOverrideType;
};

export const catalogModifierOverrideSchema: Schema<CatalogModifierOverride> =
  s.object<CatalogModifierOverride>({
    modifierId: s.string(),
    onByDefault: s.optionalNullable(s.boolean()),
    hiddenOnlineOverride: s.optional(s.lazy(() => catalogModifierToggleOverrideTypeSchema)),
    onByDefaultOverride: s.optional(s.lazy(() => catalogModifierToggleOverrideTypeSchema)),
    _keysMap: {
      modifierId: "modifier_id",
      onByDefault: "on_by_default",
      hiddenOnlineOverride: "hidden_online_override",
      onByDefaultOverride: "on_by_default_override",
    },
  });
