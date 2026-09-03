import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakSchema, type Break } from "./break.js";
import { moneySchema, type Money } from "./money.js";
import { timecardStatusSchema, type TimecardStatus } from "./timecard-status.js";
import { timecardWageSchema, type TimecardWage } from "./timecard-wage.js";

export type Timecard = {
  id?: string;
  locationId: string;
  timezone?: string | null;
  startAt: string;
  endAt?: string | null;
  wage?: TimecardWage;
  breaks?: Break[] | null;
  status?: TimecardStatus;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
  teamMemberId: string;
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
