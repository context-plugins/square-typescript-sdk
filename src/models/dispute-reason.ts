import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The list of possible reasons why a cardholder might initiate a dispute with their bank. */
export const DisputeReason = {
  /**
   * The cardholder claims that they were charged the wrong amount for the purchase. To challenge
   * this dispute, provide specific and concrete evidence that the cardholder agreed to the amount
   * charged.
   */
  AmountDiffers: "AMOUNT_DIFFERS",
  /**
   * The cardholder claims that they attempted to return the goods or cancel the service. To
   * challenge this dispute, provide specific and concrete evidence to prove that the cardholder is
   * not due a refund and that the cardholder acknowledged your cancellation policy.
   */
  Cancelled: "CANCELLED",
  /**
   * The cardholder claims that they were charged twice for the same purchase. To challenge this
   * dispute, provide specific and concrete evidence that shows both charges are legitimate and
   * independent of one another.
   */
  Duplicate: "DUPLICATE",
  /**
   * The cardholder claims that they did not make this purchase nor authorized the charge. To
   * challenge this dispute, provide specific and concrete evidence that proves that the cardholder
   * identity was verified at the time of purchase and that the purchase was authorized.
   */
  NoKnowledge: "NO_KNOWLEDGE",
  /**
   * The cardholder claims the product or service was provided, but the quality of the deliverable
   * did not align with the expectations of the cardholder based on the description. To challenge
   * this dispute, provide specific and concrete evidence that shows the cardholder is in possession
   * of the product as described or received the service as described and agreed on.
   */
  NotAsDescribed: "NOT_AS_DESCRIBED",
  /**
   * The cardholder claims the product or service was not received by the cardholder within the
   * stated time frame. To challenge this dispute, provide specific and concrete evidence to prove
   * that the cardholder is in possession of or received the product or service sold.
   */
  NotReceived: "NOT_RECEIVED",
  /**
   * The cardholder claims that they previously paid for this purchase. To challenge this dispute,
   * provide specific and concrete evidence that shows both charges are legitimate and independent
   * of one another or proof that you already provided a credit for the charge.
   */
  PaidByOtherMeans: "PAID_BY_OTHER_MEANS",
  /**
   * The cardholder claims that the purchase was canceled or returned, but they have not yet
   * received the credit. To challenge this dispute, provide specific and concrete evidence to prove
   * that the cardholder is not due a refund and that they acknowledged your cancellation and/or
   * refund policy.
   */
  CustomerRequestsCredit: "CUSTOMER_REQUESTS_CREDIT",
  /**
   * A chip-enabled card was not processed through a compliant chip-card reader (for example, it was
   * swiped instead of dipped into a chip-card reader). You cannot challenge this dispute because
   * the payment did not comply with EMV security requirements. For more information, see [What Is
   * EMV?](https://squareup.com/emv)
   */
  EmvLiabilityShift: "EMV_LIABILITY_SHIFT",
} as const;
export type DisputeReason = (typeof DisputeReason)[keyof typeof DisputeReason] | (string & {});

export const disputeReasonSchema: EnumSchema<DisputeReason> = s.enumOf<DisputeReason>(DisputeReason);
