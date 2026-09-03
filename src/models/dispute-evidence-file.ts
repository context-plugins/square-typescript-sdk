import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisputeEvidenceFile = {
  filename?: string | null;
  filetype?: string | null;
};

export const disputeEvidenceFileSchema: Schema<DisputeEvidenceFile> = s.object<DisputeEvidenceFile>({
  filename: s.optionalNullable(s.string()),
  filetype: s.optionalNullable(s.string()),
});
