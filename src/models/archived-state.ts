import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines the values for the `archived_state` query expression used in
 * [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) to return the archived, not
 * archived or either type of catalog items.
 */
export const ArchivedState = {
  /** Requested items are not archived with the `is_archived` attribute set to `false`. */
  ArchivedStateNotArchived: "ARCHIVED_STATE_NOT_ARCHIVED",
  /** Requested items are archived with the `is_archived` attribute set to `true`. */
  ArchivedStateArchived: "ARCHIVED_STATE_ARCHIVED",
  /** Requested items can be archived or not archived. */
  ArchivedStateAll: "ARCHIVED_STATE_ALL",
} as const;
export type ArchivedState = (typeof ArchivedState)[keyof typeof ArchivedState] | (string & {});

export const archivedStateSchema: EnumSchema<ArchivedState> = s.enumOf<ArchivedState>(ArchivedState);
