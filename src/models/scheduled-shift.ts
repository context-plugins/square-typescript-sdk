import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftDetailsSchema, type ScheduledShiftDetails } from "./scheduled-shift-details.js";

/**
 * Represents a specific time slot in a work schedule. This object is used to manage the lifecycle
 * of a scheduled shift from the draft to published state. A scheduled shift contains the latest
 * draft shift details and current published shift details.
 */
export type ScheduledShift = {
  /** **Read only** The Square-issued ID of the scheduled shift. */
  id?: string;
  /**
   * Represents shift details for draft and published versions of a [scheduled
   * shift](entity:ScheduledShift), such as job ID, team member assignment, and start and end times.
   */
  draftShiftDetails?: ScheduledShiftDetails;
  /**
   * Represents shift details for draft and published versions of a [scheduled
   * shift](entity:ScheduledShift), such as job ID, team member assignment, and start and end times.
   */
  publishedShiftDetails?: ScheduledShiftDetails;
  /**
   * **Read only** The current version of the scheduled shift, which is incremented with each
   * update. This field is used for [optimistic
   * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control to ensure that requests don't overwrite data from another request.
   */
  version?: number;
  /** The timestamp of when the scheduled shift was created, in RFC 3339 format presented as UTC. */
  createdAt?: string;
  /**
   * The timestamp of when the scheduled shift was last updated, in RFC 3339 format presented as
   * UTC.
   */
  updatedAt?: string;
};

export const scheduledShiftSchema: Schema<ScheduledShift> = s.object<ScheduledShift>({
  id: s.optional(s.string()),
  draftShiftDetails: s.optional(s.lazy(() => scheduledShiftDetailsSchema)),
  publishedShiftDetails: s.optional(s.lazy(() => scheduledShiftDetailsSchema)),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    draftShiftDetails: "draft_shift_details",
    publishedShiftDetails: "published_shift_details",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
