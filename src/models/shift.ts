import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakSchema, type Break } from "./break.js";
import { moneySchema, type Money } from "./money.js";
import { shiftStatusSchema, type ShiftStatus } from "./shift-status.js";
import { shiftWageSchema, type ShiftWage } from "./shift-wage.js";

export type Shift = {
  id?: string;
  employeeId?: string | null;
  locationId: string;
  timezone?: string | null;
  startAt: string;
  endAt?: string | null;
  wage?: ShiftWage;
  breaks?: Break[] | null;
  status?: ShiftStatus;
  version?: number;
  createdAt?: string;
  updatedAt?: string;
  teamMemberId?: string | null;
  declaredCashTipMoney?: Money;
};

export const shiftSchema: Schema<Shift> = s.object<Shift>({
  id: s.optional(s.string()),
  employeeId: s.optionalNullable(s.string()),
  locationId: s.string(),
  timezone: s.optionalNullable(s.string()),
  startAt: s.string(),
  endAt: s.optionalNullable(s.string()),
  wage: s.optional(s.lazy(() => shiftWageSchema)),
  breaks: s.optionalNullable(s.array(s.lazy(() => breakSchema))),
  status: s.optional(s.lazy(() => shiftStatusSchema)),
  version: s.optional(s.number()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  declaredCashTipMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    employeeId: "employee_id",
    locationId: "location_id",
    startAt: "start_at",
    endAt: "end_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    teamMemberId: "team_member_id",
    declaredCashTipMoney: "declared_cash_tip_money",
  },
});
