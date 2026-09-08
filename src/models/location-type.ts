import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A location's type. */
export const LocationType = {
  /** A place of business with a physical location. */
  Physical: "PHYSICAL",
  /** A place of business that is mobile, such as a food truck or online store. */
  Mobile: "MOBILE",
} as const;
export type LocationType = (typeof LocationType)[keyof typeof LocationType] | (string & {});

export const locationTypeSchema: EnumSchema<LocationType> = s.enumOf<LocationType>(LocationType);
