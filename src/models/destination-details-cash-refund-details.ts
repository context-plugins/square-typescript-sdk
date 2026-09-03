import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type DestinationDetailsCashRefundDetails = {
  sellerSuppliedMoney: Money;
  changeBackMoney?: Money;
};

export const destinationDetailsCashRefundDetailsSchema: Schema<DestinationDetailsCashRefundDetails> =
  s.object<DestinationDetailsCashRefundDetails>({
    sellerSuppliedMoney: moneySchema,
    changeBackMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      sellerSuppliedMoney: "seller_supplied_money",
      changeBackMoney: "change_back_money",
    },
  });
