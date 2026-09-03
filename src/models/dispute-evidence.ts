import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceFileSchema, type DisputeEvidenceFile } from "./dispute-evidence-file.js";
import { disputeEvidenceTypeSchema, type DisputeEvidenceType } from "./dispute-evidence-type.js";

export type DisputeEvidence = {
  evidenceId?: string | null;
  id?: string;
  disputeId?: string | null;
  evidenceFile?: DisputeEvidenceFile;
  evidenceText?: string | null;
  uploadedAt?: string | null;
  evidenceType?: DisputeEvidenceType;
};

export const disputeEvidenceSchema: Schema<DisputeEvidence> = s.object<DisputeEvidence>({
  evidenceId: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  disputeId: s.optionalNullable(s.string()),
  evidenceFile: s.optional(s.lazy(() => disputeEvidenceFileSchema)),
  evidenceText: s.optionalNullable(s.string()),
  uploadedAt: s.optionalNullable(s.string()),
  evidenceType: s.optional(s.lazy(() => disputeEvidenceTypeSchema)),
  _keysMap: {
    evidenceId: "evidence_id",
    disputeId: "dispute_id",
    evidenceFile: "evidence_file",
    evidenceText: "evidence_text",
    uploadedAt: "uploaded_at",
    evidenceType: "evidence_type",
  },
});
