import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A file to be uploaded as dispute evidence. */
export type DisputeEvidenceFile = {
  /** The file name including the file extension. For example: "receipt.tiff". */
  filename?: string | null;
  /**
   * Dispute evidence files must be application/pdf, image/heic, image/heif, image/jpeg, image/png,
   * or image/tiff formats.
   */
  filetype?: string | null;
};

export const disputeEvidenceFileSchema: Schema<DisputeEvidenceFile> = s.object<DisputeEvidenceFile>({
  filename: s.optionalNullable(s.string()),
  filetype: s.optionalNullable(s.string()),
});
