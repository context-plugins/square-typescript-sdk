import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashDrawerEventTypeSchema, type CashDrawerEventType } from "./cash-drawer-event-type.js";
import { moneySchema, type Money } from "./money.js";

export type CashDrawerShiftEvent = {
  id?: string;
  eventType?: CashDrawerEventType;
  eventMoney?: Money;
  createdAt?: string;
  description?: string | null;
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
