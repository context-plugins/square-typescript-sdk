import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A template for a type of [break](entity:Break) that can be added to a
 * [timecard](entity:Timecard), including the expected duration and paid status.
 */
export type BreakType = {
  /** The UUID for this object. */
  id?: string;
  /** The ID of the business location this type of break applies to. */
  locationId: string;
  /**
   * A human-readable name for this type of break. The name is displayed to team members in Square
   * products.
   */
  breakName: string;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of this break. Precision less
   * than minutes is truncated.
   *
   * Example for break expected duration of 15 minutes: PT15M
   */
  expectedDuration: string;
  /** Whether this break counts towards time worked for compensation purposes. */
  isPaid: boolean;
  /**
   * Used for resolving concurrency issues. The request fails if the version provided does not match
   * the server version at the time of the request. If a value is not provided, Square's servers
   * execute a "blind" write; potentially overwriting another writer's data.
   */
  version?: number;
  /** A read-only timestamp in RFC 3339 format. */
  createdAt?: string;
  /** A read-only timestamp in RFC 3339 format. */
  updatedAt?: string;
};

export const breakTypeSchema: Schema<BreakType> = s.object<BreakType>({
  id: s.optional(s.string()),
  locationId: s.string(),
  breakName: s.string(),
  expectedDuration: s.string(),
  isPaid: s.boolean(),
  version: s.optional(s.int()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    locationId: "location_id",
    breakName: "break_name",
    expectedDuration: "expected_duration",
    isPaid: "is_paid",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
