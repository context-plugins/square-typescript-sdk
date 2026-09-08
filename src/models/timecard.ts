import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakSchema, type Break } from "./break.js";
import { moneySchema, type Money } from "./money.js";
import { timecardStatusSchema, type TimecardStatus } from "./timecard-status.js";
import { timecardWageSchema, type TimecardWage } from "./timecard-wage.js";

/**
 * A record of the hourly rate, start time, and end time of a single timecard (shift) for a team
 * member. This might include a record of the start and end times of breaks taken during the shift.
 */
export type Timecard = {
  /** **Read only** The Square-issued UUID for this object. */
  id?: string;
  /**
   * The ID of the [location](entity:Location) for this timecard. The location should be based on
   * where the team member clocked in.
   */
  locationId: string;
  /**
   * **Read only** The time zone calculated from the location based on the `location_id`, provided
   * as a convenience value. Format: the IANA time zone database identifier for the location time
   * zone.
   */
  timezone?: string | null;
  /**
   * The start time of the timecard, in RFC 3339 format and shifted to the location timezone +
   * offset. Precision up to the minute is respected; seconds are truncated.
   */
  startAt: string;
  /**
   * The end time of the timecard, in RFC 3339 format and shifted to the location timezone + offset.
   * Precision up to the minute is respected; seconds are truncated.
   */
  endAt?: string | null;
  /** The hourly wage rate used to compensate a team member for a [timecard](entity:Timecard). */
  wage?: TimecardWage;
  /** A list of all the paid or unpaid breaks that were taken during this timecard. */
  breaks?: Break[] | null;
  /** **Read only** Enumerates the possible status of a [timecard](entity:Timecard). */
  status?: TimecardStatus;
  /**
   * **Read only** The current version of the timecard, which is incremented with each update. This
   * field is used for [optimistic
   * concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)
   * control to ensure that requests don't overwrite data from another request.
   */
  version?: number;
  /** The timestamp of when the timecard was created, in RFC 3339 format presented as UTC. */
  createdAt?: string;
  /** The timestamp of when the timecard was last updated, in RFC 3339 format presented as UTC. */
  updatedAt?: string;
  /** The ID of the [team member](entity:TeamMember) this timecard belongs to. */
  teamMemberId: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  declaredCashTipMoney?: Money;
};

export const timecardSchema: Schema<Timecard> = s.object<Timecard>({
  id: s.optional(s.string()),
  locationId: s.string(),
  timezone: s.optionalNullable(s.string()),
  startAt: s.string(),
  endAt: s.optionalNullable(s.string()),
  wage: s.optional(s.lazy(() => timecardWageSchema)),
  breaks: s.optionalNullable(s.array(s.lazy(() => breakSchema))),
  status: s.optional(s.lazy(() => timecardStatusSchema)),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  teamMemberId: s.string(),
  declaredCashTipMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    locationId: "location_id",
    startAt: "start_at",
    endAt: "end_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    teamMemberId: "team_member_id",
    declaredCashTipMoney: "declared_cash_tip_money",
  },
});
