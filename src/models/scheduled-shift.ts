import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftDetailsSchema, type ScheduledShiftDetails } from "./scheduled-shift-details.js";

export type ScheduledShift = {
  id?: string;
  draftShiftDetails?: ScheduledShiftDetails;
  publishedShiftDetails?: ScheduledShiftDetails;
  version?: number;
  createdAt?: string;
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
