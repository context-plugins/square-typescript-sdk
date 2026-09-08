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

/**
 * Represents an action performed on a [gift card](entity:GiftCard) that affects its state or
 * balance. A gift card activity contains information about a specific activity type. For example, a
 * `REDEEM` activity includes a `redeem_activity_details` field that contains information about the
 * redemption.
 */
export type GiftCardActivity = {
  /** The Square-assigned ID of the gift card activity. */
  id?: string;
  /** Indicates the type of [gift card activity](entity:GiftCardActivity). */
  type: GiftCardActivityType;
  /** The ID of the [business location](entity:Location) where the activity occurred. */
  locationId: string;
  /** The timestamp when the gift card activity was created, in RFC 3339 format. */
  createdAt?: string;
  /**
   * The gift card ID. When creating a gift card activity, `gift_card_id` is not required if
   * `gift_card_gan` is specified.
   */
  giftCardId?: string | null;
  /**
   * The gift card account number (GAN). When creating a gift card activity, `gift_card_gan` is not
   * required if `gift_card_id` is specified.
   */
  giftCardGan?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  giftCardBalanceMoney?: Money;
  /** Represents details about a `LOAD` [gift card activity type](entity:GiftCardActivityType). */
  loadActivityDetails?: GiftCardActivityLoad;
  /**
   * Represents details about an `ACTIVATE` [gift card activity type](entity:GiftCardActivityType).
   */
  activateActivityDetails?: GiftCardActivityActivate;
  /** Represents details about a `REDEEM` [gift card activity type](entity:GiftCardActivityType). */
  redeemActivityDetails?: GiftCardActivityRedeem;
  /**
   * Represents details about a `CLEAR_BALANCE` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  clearBalanceActivityDetails?: GiftCardActivityClearBalance;
  /**
   * Represents details about a `DEACTIVATE` [gift card activity type](entity:GiftCardActivityType).
   */
  deactivateActivityDetails?: GiftCardActivityDeactivate;
  /**
   * Represents details about an `ADJUST_INCREMENT` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  adjustIncrementActivityDetails?: GiftCardActivityAdjustIncrement;
  /**
   * Represents details about an `ADJUST_DECREMENT` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  adjustDecrementActivityDetails?: GiftCardActivityAdjustDecrement;
  /** Represents details about a `REFUND` [gift card activity type](entity:GiftCardActivityType). */
  refundActivityDetails?: GiftCardActivityRefund;
  /**
   * Represents details about an `UNLINKED_ACTIVITY_REFUND` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  unlinkedActivityRefundActivityDetails?: GiftCardActivityUnlinkedActivityRefund;
  /**
   * Represents details about an `IMPORT` [gift card activity type](entity:GiftCardActivityType).
   * This activity type is used when Square imports a third-party gift card, in which case the
   * `gan_source` of the gift card is set to `OTHER`.
   */
  importActivityDetails?: GiftCardActivityImport;
  /** Represents details about a `BLOCK` [gift card activity type](entity:GiftCardActivityType). */
  blockActivityDetails?: GiftCardActivityBlock;
  /**
   * Represents details about an `UNBLOCK` [gift card activity type](entity:GiftCardActivityType).
   */
  unblockActivityDetails?: GiftCardActivityUnblock;
  /**
   * Represents details about an `IMPORT_REVERSAL` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  importReversalActivityDetails?: GiftCardActivityImportReversal;
  /**
   * Represents details about a `TRANSFER_BALANCE_TO` [gift card activity
   * type](entity:GiftCardActivityType).
   */
  transferBalanceToActivityDetails?: GiftCardActivityTransferBalanceTo;
  /**
   * Represents details about a `TRANSFER_BALANCE_FROM` [gift card activity
   * type](entity:GiftCardActivityType).
   */
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
