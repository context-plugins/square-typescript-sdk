import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeEvidenceTypeSchema, type DisputeEvidenceType } from "./dispute-evidence-type.js";

/** Defines the parameters for a `CreateDisputeEvidenceFile` request. */
export type CreateDisputeEvidenceFileRequest = {
  /**
   * A unique key identifying the request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /** The type of the dispute evidence. */
  evidenceType?: DisputeEvidenceType;
  /**
   * The MIME type of the uploaded file. The type can be image/heic, image/heif, image/jpeg,
   * application/pdf, image/png, or image/tiff.
   */
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
