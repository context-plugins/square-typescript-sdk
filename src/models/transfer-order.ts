import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderLineSchema, type TransferOrderLine } from "./transfer-order-line.js";
import { transferOrderStatusSchema, type TransferOrderStatus } from "./transfer-order-status.js";

export type TransferOrder = {
  id?: string;
  sourceLocationId?: string | null;
  destinationLocationId?: string | null;
  status?: TransferOrderStatus;
  createdAt?: string;
  updatedAt?: string;
  expectedAt?: string | null;
  completedAt?: string;
  notes?: string | null;
  trackingNumber?: string | null;
  createdByTeamMemberId?: string;
  lineItems?: TransferOrderLine[] | null;
  version?: number;
};

export const transferOrderSchema: Schema<TransferOrder> = s.object<TransferOrder>({
  id: s.optional(s.string()),
  sourceLocationId: s.optionalNullable(s.string()),
  destinationLocationId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => transferOrderStatusSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  expectedAt: s.optionalNullable(s.string()),
  completedAt: s.optional(s.string()),
  notes: s.optionalNullable(s.string()),
  trackingNumber: s.optionalNullable(s.string()),
  createdByTeamMemberId: s.optional(s.string()),
  lineItems: s.optionalNullable(s.array(s.lazy(() => transferOrderLineSchema))),
  version: s.optional(s.number()),
  _keysMap: {
    sourceLocationId: "source_location_id",
    destinationLocationId: "destination_location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    expectedAt: "expected_at",
    completedAt: "completed_at",
    trackingNumber: "tracking_number",
    createdByTeamMemberId: "created_by_team_member_id",
    lineItems: "line_items",
  },
});
