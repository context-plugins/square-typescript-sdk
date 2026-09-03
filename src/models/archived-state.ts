import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ArchivedState = {
  ArchivedStateNotArchived: "ARCHIVED_STATE_NOT_ARCHIVED",
  ArchivedStateArchived: "ARCHIVED_STATE_ARCHIVED",
  ArchivedStateAll: "ARCHIVED_STATE_ALL",
} as const;
export type ArchivedState = (typeof ArchivedState)[keyof typeof ArchivedState] | (string & {});

export const archivedStateSchema: EnumSchema<ArchivedState> = s.enumOf<ArchivedState>(ArchivedState);
