import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createTransferOrderLineDataSchema,
  type CreateTransferOrderLineData,
} from "./create-transfer-order-line-data.js";

export type CreateTransferOrderData = {
  sourceLocationId: string;
  destinationLocationId: string;
  expectedAt?: string | null;
  notes?: string | null;
  trackingNumber?: string | null;
  createdByTeamMemberId?: string | null;
  lineItems?: CreateTransferOrderLineData[] | null;
};

export const createTransferOrderDataSchema: Schema<CreateTransferOrderData> =
  s.object<CreateTransferOrderData>({
    sourceLocationId: s.string(),
    destinationLocationId: s.string(),
    expectedAt: s.optionalNullable(s.string()),
    notes: s.optionalNullable(s.string()),
    trackingNumber: s.optionalNullable(s.string()),
    createdByTeamMemberId: s.optionalNullable(s.string()),
    lineItems: s.optionalNullable(s.array(s.lazy(() => createTransferOrderLineDataSchema))),
    _keysMap: {
      sourceLocationId: "source_location_id",
      destinationLocationId: "destination_location_id",
      expectedAt: "expected_at",
      trackingNumber: "tracking_number",
      createdByTeamMemberId: "created_by_team_member_id",
      lineItems: "line_items",
    },
  });
