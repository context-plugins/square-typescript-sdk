import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceTypeSchema, type DisputeEvidenceType } from "./dispute-evidence-type.js";

export type CreateDisputeEvidenceFileRequest = {
  idempotencyKey: string;
  evidenceType?: DisputeEvidenceType;
  contentType?: string;
};

export const createDisputeEvidenceFileRequestSchema: Schema<CreateDisputeEvidenceFileRequest> =
  s.object<CreateDisputeEvidenceFileRequest>({
    idempotencyKey: s.string(),
    evidenceType: s.optional(s.lazy(() => disputeEvidenceTypeSchema)),
    contentType: s.optional(s.string()),
    _keysMap: {
      idempotencyKey: "idempotency_key",
      evidenceType: "evidence_type",
      contentType: "content_type",
    },
  });
