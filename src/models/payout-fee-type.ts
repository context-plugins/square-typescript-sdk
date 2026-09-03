import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFeeType = {
  TransferFee: "TRANSFER_FEE",
  TaxOnTransferFee: "TAX_ON_TRANSFER_FEE",
} as const;
export type PayoutFeeType = (typeof PayoutFeeType)[keyof typeof PayoutFeeType] | (string & {});

export const payoutFeeTypeSchema: EnumSchema<PayoutFeeType> = s.enumOf<PayoutFeeType>(PayoutFeeType);
