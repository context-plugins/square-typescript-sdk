import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerEventTypeSchema, type CashDrawerEventType } from "./cash-drawer-event-type.js";
import { moneySchema, type Money } from "./money.js";

export type CashDrawerShiftEvent = {
  /** The unique ID of the event. */
  id?: string;
  /**
   * The types of events on a CashDrawerShift. Each event type represents an employee action on the
   * actual cash drawer represented by a CashDrawerShift.
   */
  eventType?: CashDrawerEventType;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  eventMoney?: Money;
  /** The event time in RFC 3339 format. */
  createdAt?: string;
  /** An optional description of the event, entered by the employee that created the event. */
  description?: string | null;
  /** The ID of the team member that created the event. */
  teamMemberId?: string;
};

export const cashDrawerShiftEventSchema: Schema<CashDrawerShiftEvent> = s.object<CashDrawerShiftEvent>({
  id: s.optional(s.string()),
  eventType: s.optional(s.lazy(() => cashDrawerEventTypeSchema)),
  eventMoney: s.optional(s.lazy(() => moneySchema)),
  createdAt: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  teamMemberId: s.optional(s.string()),
  _keysMap: {
    eventType: "event_type",
    eventMoney: "event_money",
    createdAt: "created_at",
    teamMemberId: "team_member_id",
  },
});
