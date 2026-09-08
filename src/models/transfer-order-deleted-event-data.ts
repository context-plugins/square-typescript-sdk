import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOrderDeletedEventData = {
  /** Name of the affected object’s type, `"transfer_order"`. */
  type?: string | null;
  /** ID of the affected transfer_order. */
  id?: string;
  /** Is true if the affected object was deleted. Otherwise absent. */
  deleted?: boolean | null;
};

export const transferOrderDeletedEventDataSchema: Schema<TransferOrderDeletedEventData> =
  s.object<TransferOrderDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    deleted: s.optionalNullable(s.boolean()),
  });
