import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The list of possible dispute states. */
export const DisputeState = {
  /** The initial state of an inquiry with evidence required */
  InquiryEvidenceRequired: "INQUIRY_EVIDENCE_REQUIRED",
  /** Inquiry evidence has been submitted and the bank is processing the inquiry */
  InquiryProcessing: "INQUIRY_PROCESSING",
  /** The inquiry is complete */
  InquiryClosed: "INQUIRY_CLOSED",
  /** The initial state of a dispute with evidence required */
  EvidenceRequired: "EVIDENCE_REQUIRED",
  /** Dispute evidence has been submitted and the bank is processing the dispute */
  Processing: "PROCESSING",
  /** The bank has completed processing the dispute and the seller has won */
  Won: "WON",
  /** The bank has completed processing the dispute and the seller has lost */
  Lost: "LOST",
  /** The seller has accepted the dispute */
  Accepted: "ACCEPTED",
} as const;
export type DisputeState = (typeof DisputeState)[keyof typeof DisputeState] | (string & {});

export const disputeStateSchema: EnumSchema<DisputeState> = s.enumOf<DisputeState>(DisputeState);
