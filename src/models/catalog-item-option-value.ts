import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An enumerated value that can link a `CatalogItemVariation` to an item option as one of its item
 * option values.
 */
export type CatalogItemOptionValue = {
  /** Unique ID of the associated item option. */
  itemOptionId?: string | null;
  /**
   * Name of this item option value. This is a searchable attribute for use in applicable query
   * filters.
   */
  name?: string | null;
  /**
   * A human-readable description for the option value. This is a searchable attribute for use in
   * applicable query filters.
   */
  description?: string | null;
  /**
   * The HTML-supported hex color for the item option (e.g., "#ff8d4e85"). Only displayed if
   * `show_colors` is enabled on the parent `ItemOption`. When left unset, `color` defaults to white
   * ("#ffffff") when `show_colors` is enabled on the parent `ItemOption`.
   */
  color?: string | null;
  /** Determines where this option value appears in a list of option values. */
  ordinal?: number | null;
};

export const catalogItemOptionValueSchema: Schema<CatalogItemOptionValue> = s.object<CatalogItemOptionValue>({
  itemOptionId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  color: s.optionalNullable(s.string()),
  ordinal: s.optionalNullable(s.int()),
  _keysMap: {
    itemOptionId: "item_option_id",
  },
});
