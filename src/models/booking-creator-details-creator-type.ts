import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported types of a booking creator. */
export const BookingCreatorDetailsCreatorType = {
  /** The creator is of the seller type. */
  TeamMember: "TEAM_MEMBER",
  /** The creator is of the buyer type. */
  Customer: "CUSTOMER",
} as const;
export type BookingCreatorDetailsCreatorType =
  | (typeof BookingCreatorDetailsCreatorType)[keyof typeof BookingCreatorDetailsCreatorType]
  | (string & {});

export const bookingCreatorDetailsCreatorTypeSchema: EnumSchema<BookingCreatorDetailsCreatorType> =
  s.enumOf<BookingCreatorDetailsCreatorType>(BookingCreatorDetailsCreatorType);
