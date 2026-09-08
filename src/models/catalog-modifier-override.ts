import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogModifierToggleOverrideTypeSchema,
  type CatalogModifierToggleOverrideType,
} from "./catalog-modifier-toggle-override-type.js";

/** Options to control how to override the default behavior of the specified modifier. */
export type CatalogModifierOverride = {
  /** The ID of the `CatalogModifier` whose default behavior is being overridden. */
  modifierId: string;
  /** __Deprecated__: Use `on_by_default_override` instead. */
  onByDefault?: boolean | null;
  /** Item level overrides for bool attributes */
  hiddenOnlineOverride?: CatalogModifierToggleOverrideType;
  /** Item level overrides for bool attributes */
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
