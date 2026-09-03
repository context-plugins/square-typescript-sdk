import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisputeState = {
  InquiryEvidenceRequired: "INQUIRY_EVIDENCE_REQUIRED",
  InquiryProcessing: "INQUIRY_PROCESSING",
  InquiryClosed: "INQUIRY_CLOSED",
  EvidenceRequired: "EVIDENCE_REQUIRED",
  Processing: "PROCESSING",
  Won: "WON",
  Lost: "LOST",
  Accepted: "ACCEPTED",
} as const;
export type DisputeState = (typeof DisputeState)[keyof typeof DisputeState] | (string & {});

export const disputeStateSchema: EnumSchema<DisputeState> = s.enumOf<DisputeState>(DisputeState);
