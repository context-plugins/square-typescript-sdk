import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes receipt action fields. */
export type ReceiptOptions = {
  /** The reference to the Square payment ID for the receipt. */
  paymentId: string;
  /**
   * Instructs the device to print the receipt without displaying the receipt selection screen.
   * Requires `printer_enabled` set to true. Defaults to false.
   */
  printOnly?: boolean | null;
  /** Identify the receipt as a reprint rather than an original receipt. Defaults to false. */
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
