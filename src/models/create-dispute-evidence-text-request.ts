import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceTypeSchema, type DisputeEvidenceType } from "./dispute-evidence-type.js";

export type CreateDisputeEvidenceTextRequest = {
  idempotencyKey: string;
  evidenceType?: DisputeEvidenceType;
  evidenceText: string;
};

export const createDisputeEvidenceTextRequestSchema: Schema<CreateDisputeEvidenceTextRequest> =
  s.object<CreateDisputeEvidenceTextRequest>({
    idempotencyKey: s.string(),
    evidenceType: s.optional(s.lazy(() => disputeEvidenceTypeSchema)),
    evidenceText: s.string(),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      evidenceType: "evidence_type",
      evidenceText: "evidence_text",
    },
  });
