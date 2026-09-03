import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiptOptions = {
  paymentId: string;
  printOnly?: boolean | null;
  isDuplicate?: boolean | null;
};

export const receiptOptionsSchema: Schema<ReceiptOptions> = s.object<ReceiptOptions>({
  paymentId: s.string(),
  printOnly: s.optionalNullable(s.boolean()),
  isDuplicate: s.optionalNullable(s.boolean()),
  _keysMap: {
    paymentId: "payment_id",
    printOnly: "print_only",
    isDuplicate: "is_duplicate",
  },
});
