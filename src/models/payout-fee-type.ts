import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Represents the type of payout fee that can incur as part of a payout. */
export const PayoutFeeType = {
  /** Fee type associated with transfers. */
  TransferFee: "TRANSFER_FEE",
  /** Taxes associated with the transfer fee. */
  TaxOnTransferFee: "TAX_ON_TRANSFER_FEE",
} as const;
export type PayoutFeeType = (typeof PayoutFeeType)[keyof typeof PayoutFeeType] | (string & {});

export const payoutFeeTypeSchema: EnumSchema<PayoutFeeType> = s.enumOf<PayoutFeeType>(PayoutFeeType);
