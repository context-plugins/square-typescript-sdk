import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LocationStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type LocationStatus = (typeof LocationStatus)[keyof typeof LocationStatus] | (string & {});

export const locationStatusSchema: EnumSchema<LocationStatus> = s.enumOf<LocationStatus>(LocationStatus);
