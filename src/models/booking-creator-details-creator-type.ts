import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BookingCreatorDetailsCreatorType = {
  TeamMember: "TEAM_MEMBER",
  Customer: "CUSTOMER",
} as const;
export type BookingCreatorDetailsCreatorType =
  | (typeof BookingCreatorDetailsCreatorType)[keyof typeof BookingCreatorDetailsCreatorType]
  | (string & {});

export const bookingCreatorDetailsCreatorTypeSchema: EnumSchema<BookingCreatorDetailsCreatorType> =
  s.enumOf<BookingCreatorDetailsCreatorType>(BookingCreatorDetailsCreatorType);
