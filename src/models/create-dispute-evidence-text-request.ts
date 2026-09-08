import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceTypeSchema, type DisputeEvidenceType } from "./dispute-evidence-type.js";

/** Defines the parameters for a `CreateDisputeEvidenceText` request. */
export type CreateDisputeEvidenceTextRequest = {
  /**
   * A unique key identifying the request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /** The type of the dispute evidence. */
  evidenceType?: DisputeEvidenceType;
  /** The evidence string. */
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
