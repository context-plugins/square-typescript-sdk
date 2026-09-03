import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";
import { sourceApplicationSchema, type SourceApplication } from "./source-application.js";

export type InventoryPhysicalCount = {
  id?: string;
  referenceId?: string | null;
  catalogObjectId?: string | null;
  catalogObjectType?: string | null;
  state?: InventoryState;
  locationId?: string | null;
  quantity?: string | null;
  source?: SourceApplication;
  employeeId?: string | null;
  teamMemberId?: string | null;
  occurredAt?: string | null;
  createdAt?: string;
  adjustmentId?: string;
};

export const inventoryPhysicalCountSchema: Schema<InventoryPhysicalCount> = s.object<InventoryPhysicalCount>({
  id: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogObjectType: s.optionalNullable(s.string()),
  state: s.optional(s.lazy(() => inventoryStateSchema)),
  locationId: s.optionalNullable(s.string()),
  quantity: s.optionalNullable(s.string()),
  source: s.optional(s.lazy(() => sourceApplicationSchema)),
  employeeId: s.optionalNullable(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  occurredAt: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  adjustmentId: s.optional(s.string()),
  _keysMap: {
    referenceId: "reference_id",
    catalogObjectId: "catalog_object_id",
    catalogObjectType: "catalog_object_type",
    locationId: "location_id",
    employeeId: "employee_id",
    teamMemberId: "team_member_id",
    occurredAt: "occurred_at",
    createdAt: "created_at",
    adjustmentId: "adjustment_id",
  },
});
