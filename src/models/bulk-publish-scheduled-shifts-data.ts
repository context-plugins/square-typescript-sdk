import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents options for an individual publish request in a
 * [BulkPublishScheduledShifts](api-endpoint:Labor-BulkPublishScheduledShifts) operation, provided
 * as the value in a key-value pair.
 */
export type BulkPublishScheduledShiftsData = {
  /**
   * The current version of the scheduled shift, used to enable [optimistic
   * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control. If the provided version doesn't match the server version, the request fails. If
   * omitted, Square executes a blind write, potentially overwriting data from another publish
   * request.
   */
  version?: number;
};

export const bulkPublishScheduledShiftsDataSchema: Schema<BulkPublishScheduledShiftsData> =
  s.object<BulkPublishScheduledShiftsData>({
    version: s.optional(s.number()),
  });
