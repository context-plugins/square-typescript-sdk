import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityActivateSchema,
  type GiftCardActivityActivate,
} from "./gift-card-activity-activate.js";
import {
  giftCardActivityAdjustDecrementSchema,
  type GiftCardActivityAdjustDecrement,
} from "./gift-card-activity-adjust-decrement.js";
import {
  giftCardActivityAdjustIncrementSchema,
  type GiftCardActivityAdjustIncrement,
} from "./gift-card-activity-adjust-increment.js";
import { giftCardActivityBlockSchema, type GiftCardActivityBlock } from "./gift-card-activity-block.js";
import {
  giftCardActivityClearBalanceSchema,
  type GiftCardActivityClearBalance,
} from "./gift-card-activity-clear-balance.js";
import {
  giftCardActivityDeactivateSchema,
  type GiftCardActivityDeactivate,
} from "./gift-card-activity-deactivate.js";
import {
  giftCardActivityImportReversalSchema,
  type GiftCardActivityImportReversal,
} from "./gift-card-activity-import-reversal.js";
import { giftCardActivityImportSchema, type GiftCardActivityImport } from "./gift-card-activity-import.js";
import { giftCardActivityLoadSchema, type GiftCardActivityLoad } from "./gift-card-activity-load.js";
import { giftCardActivityRedeemSchema, type GiftCardActivityRedeem } from "./gift-card-activity-redeem.js";
import { giftCardActivityRefundSchema, type GiftCardActivityRefund } from "./gift-card-activity-refund.js";
import {
  giftCardActivityTransferBalanceFromSchema,
  type GiftCardActivityTransferBalanceFrom,
} from "./gift-card-activity-transfer-balance-from.js";
import {
  giftCardActivityTransferBalanceToSchema,
  type GiftCardActivityTransferBalanceTo,
} from "./gift-card-activity-transfer-balance-to.js";
import { giftCardActivityTypeSchema, type GiftCardActivityType } from "./gift-card-activity-type.js";
import { giftCardActivityUnblockSchema, type GiftCardActivityUnblock } from "./gift-card-activity-unblock.js";
import {
  giftCardActivityUnlinkedActivityRefundSchema,
  type GiftCardActivityUnlinkedActivityRefund,
} from "./gift-card-activity-unlinked-activity-refund.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCardActivity = {
  id?: string;
  type: GiftCardActivityType;
  locationId: string;
  createdAt?: string;
  giftCardId?: string | null;
  giftCardGan?: string | null;
  giftCardBalanceMoney?: Money;
  loadActivityDetails?: GiftCardActivityLoad;
  activateActivityDetails?: GiftCardActivityActivate;
  redeemActivityDetails?: GiftCardActivityRedeem;
  clearBalanceActivityDetails?: GiftCardActivityClearBalance;
  deactivateActivityDetails?: GiftCardActivityDeactivate;
  adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
  adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
  refundActivityDetails?: GiftCardActivityRefund;
  unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
  importActivityDetails?: GiftCardActivityImport;
  blockActivityDetails?: GiftCardActivityBlock;
  unblockActivityDetails?: GiftCardActivityUnblock;
  importReversalActivityDetails?: GiftCardActivityImportReversal;
  transferBalanceToActivityDetails?: GiftCardActivityTransferBalanceTo;
  transferBalanceFromActivityDetails?: GiftCardActivityTransferBalanceFrom;
};

export const giftCardActivitySchema: Schema<GiftCardActivity> = s.object<GiftCardActivity>({
  id: s.optional(s.string()),
  type: giftCardActivityTypeSchema,
  locationId: s.string(),
  createdAt: s.optional(s.string()),
  giftCardId: s.optionalNullable(s.string()),
  giftCardGan: s.optionalNullable(s.string()),
  giftCardBalanceMoney: s.optional(s.lazy(() => moneySchema)),
  loadActivityDetails: s.optional(s.lazy(() => giftCardActivityLoadSchema)),
  activateActivityDetails: s.optional(s.lazy(() => giftCardActivityActivateSchema)),
  redeemActivityDetails: s.optional(s.lazy(() => giftCardActivityRedeemSchema)),
  clearBalanceActivityDetails: s.optional(s.lazy(() => giftCardActivityClearBalanceSchema)),
  deactivateActivityDetails: s.optional(s.lazy(() => giftCardActivityDeactivateSchema)),
  adjustIncrementActivityDetails: s.optional(s.lazy(() => giftCardActivityAdjustIncrementSchema)),
  adjustDecrementActivityDetails: s.optional(s.lazy(() => giftCardActivityAdjustDecrementSchema)),
  refundActivityDetails: s.optional(s.lazy(() => giftCardActivityRefundSchema)),
  unlinkedActivityRefundActivityDetails: s.optional(
    s.lazy(() => giftCardActivityUnlinkedActivityRefundSchema),
  ),
  importActivityDetails: s.optional(s.lazy(() => giftCardActivityImportSchema)),
  blockActivityDetails: s.optional(s.lazy(() => giftCardActivityBlockSchema)),
  unblockActivityDetails: s.optional(s.lazy(() => giftCardActivityUnblockSchema)),
  importReversalActivityDetails: s.optional(s.lazy(() => giftCardActivityImportReversalSchema)),
  transferBalanceToActivityDetails: s.optional(s.lazy(() => giftCardActivityTransferBalanceToSchema)),
  transferBalanceFromActivityDetails: s.optional(s.lazy(() => giftCardActivityTransferBalanceFromSchema)),
  _keysMap: {
    locationId: "location_id",
    createdAt: "created_at",
    giftCardId: "gift_card_id",
    giftCardGan: "gift_card_gan",
    giftCardBalanceMoney: "gift_card_balance_money",
    loadActivityDetails: "load_activity_details",
    activateActivityDetails: "activate_activity_details",
    redeemActivityDetails: "redeem_activity_details",
    clearBalanceActivityDetails: "clear_balance_activity_details",
    deactivateActivityDetails: "deactivate_activity_details",
    adjustIncrementActivityDetails: "adjust_increment_activity_details",
    adjustDecrementActivityDetails: "adjust_decrement_activity_details",
    refundActivityDetails: "refund_activity_details",
    unlinkedActivityRefundActivityDetails: "unlinked_activity_refund_activity_details",
    importActivityDetails: "import_activity_details",
    blockActivityDetails: "block_activity_details",
    unblockActivityDetails: "unblock_activity_details",
    importReversalActivityDetails: "import_reversal_activity_details",
    transferBalanceToActivityDetails: "transfer_balance_to_activity_details",
    transferBalanceFromActivityDetails: "transfer_balance_from_activity_details",
  },
});
