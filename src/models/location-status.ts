import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A location's status. */
export const LocationStatus = {
  /** A location that is active for business. */
  Active: "ACTIVE",
  /**
   * A location that is not active for business. Inactive locations provide historical information.
   * Hide inactive locations unless the user has requested to see them.
   */
  Inactive: "INACTIVE",
} as const;
export type LocationStatus = (typeof LocationStatus)[keyof typeof LocationStatus] | (string & {});

export const locationStatusSchema: EnumSchema<LocationStatus> = s.enumOf<LocationStatus>(LocationStatus);
