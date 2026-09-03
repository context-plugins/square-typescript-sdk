import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FulfillmentFulfillmentEntry = {
  uid?: string | null;
  lineItemUid: string;
  quantity: string;
  metadata?: Record<string, string> | null;
};

export const fulfillmentFulfillmentEntrySchema: Schema<FulfillmentFulfillmentEntry> =
  s.object<FulfillmentFulfillmentEntry>({
    uid: s.optionalNullable(s.string()),
    lineItemUid: s.string(),
    quantity: s.string(),
    metadata: s.optionalNullable(s.record(s.string(), s.string())),
    _keysMap: {
      lineItemUid: "line_item_uid",
    },
  });
