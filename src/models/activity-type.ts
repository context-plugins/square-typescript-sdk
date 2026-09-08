import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActivityType = {
  /** A manual adjustment applied to the seller's account by Square. */
  Adjustment: "ADJUSTMENT",
  /** A refund for an application fee on a payment. */
  AppFeeRefund: "APP_FEE_REFUND",
  /** Revenue generated from an application fee on a payment. */
  AppFeeRevenue: "APP_FEE_REVENUE",
  /**
   * An automatic transfer from the payment processing balance to the Square Savings account. These
   * are generally proportional to the seller's sales.
   */
  AutomaticSavings: "AUTOMATIC_SAVINGS",
  /**
   * An automatic transfer from the Square Savings account back to the processing balance. These are
   * generally proportional to the seller's refunds.
   */
  AutomaticSavingsReversed: "AUTOMATIC_SAVINGS_REVERSED",
  /** A credit card payment capture. */
  Charge: "CHARGE",
  /** A fee assessed because of a deposit, such as an instant deposit. */
  DepositFee: "DEPOSIT_FEE",
  /**
   * Indicates that Square returned a fee that was previously assessed because of a deposit, such as
   * an instant deposit, back to the seller's account.
   */
  DepositFeeReversed: "DEPOSIT_FEE_REVERSED",
  /** The balance change due to a dispute event. */
  Dispute: "DISPUTE",
  /** An escheatment entry for remittance. */
  Escheatment: "ESCHEATMENT",
  /** The cost plus adjustment fee. */
  Fee: "FEE",
  /**
   * Square offers free payments processing for a variety of business scenarios, including seller
   * referrals or when Square wants to apologize (for example, for a bug, customer service, or
   * repricing complication). This entry represents a credit to the seller for the purposes of free
   * processing.
   */
  FreeProcessing: "FREE_PROCESSING",
  /** An adjustment made by Square related to holding a payment. */
  HoldAdjustment: "HOLD_ADJUSTMENT",
  /**
   * An external change to a seller's balance (initial, in the sense that it causes the creation of
   * the other activity types, such as a hold and refund).
   */
  InitialBalanceChange: "INITIAL_BALANCE_CHANGE",
  /** The balance change from a money transfer. */
  MoneyTransfer: "MONEY_TRANSFER",
  /** The reversal of a money transfer. */
  MoneyTransferReversal: "MONEY_TRANSFER_REVERSAL",
  /** The balance change for a chargeback that's been filed. */
  OpenDispute: "OPEN_DISPUTE",
  /** Any other type that doesn't belong in the rest of the types. */
  Other: "OTHER",
  /** Any other type of adjustment that doesn't fall under existing types. */
  OtherAdjustment: "OTHER_ADJUSTMENT",
  /** A fee paid to a third-party seller. */
  PaidServiceFee: "PAID_SERVICE_FEE",
  /** A fee refunded to a third-party seller. */
  PaidServiceFeeRefund: "PAID_SERVICE_FEE_REFUND",
  /** Repayment for a redemption code. */
  RedemptionCode: "REDEMPTION_CODE",
  /** A refund for an existing card payment. */
  Refund: "REFUND",
  /** An adjustment made by Square related to releasing a payment. */
  ReleaseAdjustment: "RELEASE_ADJUSTMENT",
  /** Fees paid for a funding risk reserve. */
  ReserveHold: "RESERVE_HOLD",
  /** Fees released from a risk reserve. */
  ReserveRelease: "RESERVE_RELEASE",
  /**
   * An entry created when Square receives a response for the ACH file that Square sent indicating
   * that the settlement of the original entry failed.
   */
  ReturnedPayout: "RETURNED_PAYOUT",
  /**
   * A capital merchant cash advance (MCA) assessment. These are generally proportional to the
   * merchant's sales but can be issued for other reasons related to the MCA.
   */
  SquareCapitalPayment: "SQUARE_CAPITAL_PAYMENT",
  /**
   * A capital merchant cash advance (MCA) assessment refund. These are generally proportional to
   * the merchant's refunds but can be issued for other reasons related to the MCA.
   */
  SquareCapitalReversedPayment: "SQUARE_CAPITAL_REVERSED_PAYMENT",
  /** A fee charged for subscription to a Square product. */
  SubscriptionFee: "SUBSCRIPTION_FEE",
  /** A Square subscription fee that's been refunded. */
  SubscriptionFeePaidRefund: "SUBSCRIPTION_FEE_PAID_REFUND",
  /** The refund of a previously charged Square product subscription fee. */
  SubscriptionFeeRefund: "SUBSCRIPTION_FEE_REFUND",
  /** The tax paid on fee amounts. */
  TaxOnFee: "TAX_ON_FEE",
  /** Fees collected by a third-party platform. */
  ThirdPartyFee: "THIRD_PARTY_FEE",
  /** Refunded fees from a third-party platform. */
  ThirdPartyFeeRefund: "THIRD_PARTY_FEE_REFUND",
  /**
   * The balance change due to a money transfer. Note that this type is never returned by the
   * Payouts API.
   */
  Payout: "PAYOUT",
  /**
   * Indicates that the portion of each payment withheld by Square was automatically converted into
   * bitcoin using Cash App. The seller manages their bitcoin in their Cash App account.
   */
  AutomaticBitcoinConversions: "AUTOMATIC_BITCOIN_CONVERSIONS",
  /**
   * Indicates that a withheld payment, which was scheduled to be converted into bitcoin using Cash
   * App, was deposited back to the Square payments balance.
   */
  AutomaticBitcoinConversionsReversed: "AUTOMATIC_BITCOIN_CONVERSIONS_REVERSED",
  /**
   * Indicates that a repayment toward the outstanding balance on the seller's Square credit card
   * was made.
   */
  CreditCardRepayment: "CREDIT_CARD_REPAYMENT",
  /**
   * Indicates that a repayment toward the outstanding balance on the seller's Square credit card
   * was reversed.
   */
  CreditCardRepaymentReversed: "CREDIT_CARD_REPAYMENT_REVERSED",
  /** Cashback amount given by a Square Local Offers seller to their customer for a purchase. */
  LocalOffersCashback: "LOCAL_OFFERS_CASHBACK",
  /**
   * A commission fee paid by a Square Local Offers seller to Square for a purchase discovered
   * through Square Local Offers.
   */
  LocalOffersFee: "LOCAL_OFFERS_FEE",
  /**
   * When activating Percentage Processing, a credit is applied to the seller’s account to offset
   * any negative balance caused by a dispute.
   */
  PercentageProcessingEnrollment: "PERCENTAGE_PROCESSING_ENROLLMENT",
  /**
   * Deducting the outstanding Percentage Processing balance from the seller’s account. It's the
   * final installment in repaying the dispute-induced negative balance through percentage
   * processing.
   */
  PercentageProcessingDeactivation: "PERCENTAGE_PROCESSING_DEACTIVATION",
  /**
   * Withheld funds from a payment to cover a negative balance. It's an installment to repay the
   * amount from a dispute that had been offset during Percentage Processing enrollment.
   */
  PercentageProcessingRepayment: "PERCENTAGE_PROCESSING_REPAYMENT",
  /**
   * The reversal of a percentage processing repayment that happens for example when a refund is
   * issued for a payment.
   */
  PercentageProcessingRepaymentReversed: "PERCENTAGE_PROCESSING_REPAYMENT_REVERSED",
  /**
   * The processing fee for a payment. If sellers opt for Gross Settlement, i.e., direct bank
   * withdrawal instead of deducting fees from daily sales, the processing fee is recorded
   * separately as a new payout entry, not part of the CHARGE payout entry.
   */
  ProcessingFee: "PROCESSING_FEE",
  /**
   * The processing fee for a payment refund issued by sellers enrolled in Gross Settlement. The
   * refunded processing fee is recorded separately as a new payout entry, not part of the REFUND
   * payout entry.
   */
  ProcessingFeeRefund: "PROCESSING_FEE_REFUND",
  /**
   * When undoing a processing fee refund in a Gross Settlement payment, this payout entry type is
   * used.
   */
  UndoProcessingFeeRefund: "UNDO_PROCESSING_FEE_REFUND",
  /**
   * Fee collected during the sale or reload of a gift card. This fee, which is a portion of the
   * amount loaded on the gift card, is deducted from the merchant's payment balance.
   */
  GiftCardLoadFee: "GIFT_CARD_LOAD_FEE",
  /** Refund for fee charged during the sale or reload of a gift card. */
  GiftCardLoadFeeRefund: "GIFT_CARD_LOAD_FEE_REFUND",
  /** The undo of a refund for a fee charged during the sale or reload of a gift card. */
  UndoGiftCardLoadFeeRefund: "UNDO_GIFT_CARD_LOAD_FEE_REFUND",
  /**
   * A transfer of funds to a banking folder. In the United States, the folder name is 'Checking
   * Folder'; in Canada, it's 'Balance Folder.'
   */
  BalanceFoldersTransfer: "BALANCE_FOLDERS_TRANSFER",
  /**
   * A reversal of transfer of funds from a banking folder. In the United States, the folder name is
   * 'Checking Folder'; in Canada, it's 'Balance Folder.'
   */
  BalanceFoldersTransferReversed: "BALANCE_FOLDERS_TRANSFER_REVERSED",
  /**
   * A transfer of gift card funds to a central gift card pool account. In franchises, when gift
   * cards are loaded or reloaded at any location, the money transfers to the franchisor's account.
   */
  GiftCardPoolTransfer: "GIFT_CARD_POOL_TRANSFER",
  /**
   * A reversal of transfer of gift card funds from a central gift card pool account. In franchises,
   * when gift cards are loaded or reloaded at any location, the money transfers to the franchisor's
   * account.
   */
  GiftCardPoolTransferReversed: "GIFT_CARD_POOL_TRANSFER_REVERSED",
  /** A payroll payment that was transferred to a team member’s bank account. */
  SquarePayrollTransfer: "SQUARE_PAYROLL_TRANSFER",
  /**
   * A payroll payment to a team member’s bank account that was deposited back to the seller’s
   * account by Square.
   */
  SquarePayrollTransferReversed: "SQUARE_PAYROLL_TRANSFER_REVERSED",
} as const;
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType] | (string & {});

export const activityTypeSchema: EnumSchema<ActivityType> = s.enumOf<ActivityType>(ActivityType);
