import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of [gift card activity](entity:GiftCardActivity). */
export const GiftCardActivityType = {
  /**
   * Activated a gift card with a balance. When a gift card is activated, Square changes the gift
   * card state from `PENDING` to `ACTIVE`. A gift card must be in the `ACTIVE` state to be used for
   * other balance-changing activities.
   */
  Activate: "ACTIVATE",
  /** Loaded a gift card with additional funds. */
  Load: "LOAD",
  /** Redeemed a gift card for a purchase. */
  Redeem: "REDEEM",
  /** Set the balance of a gift card to zero. */
  ClearBalance: "CLEAR_BALANCE",
  /** Permanently blocked a gift card from balance-changing activities. */
  Deactivate: "DEACTIVATE",
  /**
   * Added money to a gift card outside of a typical `ACTIVATE`, `LOAD`, or `REFUND` activity flow.
   */
  AdjustIncrement: "ADJUST_INCREMENT",
  /** Deducted money from a gift card outside of a typical `REDEEM` activity flow. */
  AdjustDecrement: "ADJUST_DECREMENT",
  /**
   * Added money to a gift card from a refunded transaction. A `REFUND` activity might be linked to
   * a Square payment, depending on how the payment and refund are processed. For example:
   * - A payment processed by Square can be refunded to a `PENDING` or `ACTIVE` gift card using the
   *   Square Seller Dashboard, Square Point of Sale, or Refunds API.
   * - A payment processed using a custom processing system can be refunded to the same gift card.
   */
  Refund: "REFUND",
  /**
   * Added money to a gift card from a refunded transaction that was processed using a custom
   * payment processing system and not linked to the gift card.
   */
  UnlinkedActivityRefund: "UNLINKED_ACTIVITY_REFUND",
  /**
   * Imported a third-party gift card with a balance. `IMPORT` activities are managed by Square and
   * cannot be created using the Gift Card Activities API.
   */
  Import: "IMPORT",
  /**
   * Temporarily blocked a gift card from balance-changing activities. `BLOCK` activities are
   * managed by Square and cannot be created using the Gift Card Activities API.
   */
  Block: "BLOCK",
  /**
   * Unblocked a gift card, which enables it to resume balance-changing activities. `UNBLOCK`
   * activities are managed by Square and cannot be created using the Gift Card Activities API.
   */
  Unblock: "UNBLOCK",
  /**
   * Reversed the import of a third-party gift card, which sets the gift card state to `PENDING` and
   * clears the balance. `IMPORT_REVERSAL` activities are managed by Square and cannot be created
   * using the Gift Card Activities API.
   */
  ImportReversal: "IMPORT_REVERSAL",
  /**
   * Deducted money from a gift card as the result of a transfer to the balance of another gift
   * card. `TRANSFER_BALANCE_FROM` activities are managed by Square and cannot be created using the
   * Gift Card Activities API.
   */
  TransferBalanceFrom: "TRANSFER_BALANCE_FROM",
  /**
   * Added money to a gift card as the result of a transfer from the balance of another gift card.
   * `TRANSFER_BALANCE_TO` activities are managed by Square and cannot be created using the Gift
   * Card Activities API.
   */
  TransferBalanceTo: "TRANSFER_BALANCE_TO",
} as const;
export type GiftCardActivityType =
  | (typeof GiftCardActivityType)[keyof typeof GiftCardActivityType]
  | (string & {});

export const giftCardActivityTypeSchema: EnumSchema<GiftCardActivityType> =
  s.enumOf<GiftCardActivityType>(GiftCardActivityType);
