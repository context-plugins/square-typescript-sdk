import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timecardSchema, type Timecard } from "./timecard.js";

export type CreateTimecardRequest = {
  idempotencyKey?: string;
  timecard: Timecard;
};

export const createTimecardRequestSchema: Schema<CreateTimecardRequest> = s.object<CreateTimecardRequest>({
  idempotencyKey: s.optional(s.string()),
  timecard: timecardSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
