import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  inventoryAdjustmentGroupSchema,
  type InventoryAdjustmentGroup,
} from "./inventory-adjustment-group.js";
import {
  inventoryAdjustmentReasonIdSchema,
  type InventoryAdjustmentReasonId,
} from "./inventory-adjustment-reason-id.js";
import { inventoryStateSchema, type InventoryState } from "./inventory-state.js";
import { moneySchema, type Money } from "./money.js";
import { sourceApplicationSchema, type SourceApplication } from "./source-application.js";

export type InventoryAdjustment = {
  id?: string;
  referenceId?: string | null;
  fromState?: InventoryState;
  toState?: InventoryState;
  fromLocationId?: string | null;
  toLocationId?: string | null;
  catalogObjectId?: string | null;
  catalogObjectType?: string | null;
  quantity?: string | null;
  totalPriceMoney?: Money;
  occurredAt?: string | null;
  createdAt?: string;
  source?: SourceApplication;
  employeeId?: string | null;
  teamMemberId?: string | null;
  transactionId?: string;
  refundId?: string;
  purchaseOrderId?: string;
  goodsReceiptId?: string;
  adjustmentGroup?: InventoryAdjustmentGroup;
  costMoney?: Money;
  vendorId?: string | null;
  physicalCountId?: string;
  reasonId?: InventoryAdjustmentReasonId;
};

export const inventoryAdjustmentSchema: Schema<InventoryAdjustment> = s.object<InventoryAdjustment>({
  id: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  fromState: s.optional(s.lazy(() => inventoryStateSchema)),
  toState: s.optional(s.lazy(() => inventoryStateSchema)),
  fromLocationId: s.optionalNullable(s.string()),
  toLocationId: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogObjectType: s.optionalNullable(s.string()),
  quantity: s.optionalNullable(s.string()),
  totalPriceMoney: s.optional(s.lazy(() => moneySchema)),
  occurredAt: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  source: s.optional(s.lazy(() => sourceApplicationSchema)),
  employeeId: s.optionalNullable(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  transactionId: s.optional(s.string()),
  refundId: s.optional(s.string()),
  purchaseOrderId: s.optional(s.string()),
  goodsReceiptId: s.optional(s.string()),
  adjustmentGroup: s.optional(s.lazy(() => inventoryAdjustmentGroupSchema)),
  costMoney: s.optional(s.lazy(() => moneySchema)),
  vendorId: s.optionalNullable(s.string()),
  physicalCountId: s.optional(s.string()),
  reasonId: s.optional(s.lazy(() => inventoryAdjustmentReasonIdSchema)),
  _keysMap: {
    referenceId: "reference_id",
    fromState: "from_state",
    toState: "to_state",
    fromLocationId: "from_location_id",
    toLocationId: "to_location_id",
    catalogObjectId: "catalog_object_id",
    catalogObjectType: "catalog_object_type",
    totalPriceMoney: "total_price_money",
    occurredAt: "occurred_at",
    createdAt: "created_at",
    employeeId: "employee_id",
    teamMemberId: "team_member_id",
    transactionId: "transaction_id",
    refundId: "refund_id",
    purchaseOrderId: "purchase_order_id",
    goodsReceiptId: "goods_receipt_id",
    adjustmentGroup: "adjustment_group",
    costMoney: "cost_money",
    vendorId: "vendor_id",
    physicalCountId: "physical_count_id",
    reasonId: "reason_id",
  },
});
