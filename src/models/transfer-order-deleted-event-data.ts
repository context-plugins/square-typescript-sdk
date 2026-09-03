import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOrderDeletedEventData = {
  type?: string | null;
  id?: string;
  deleted?: boolean | null;
};

export const transferOrderDeletedEventDataSchema: Schema<TransferOrderDeletedEventData> =
  s.object<TransferOrderDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
