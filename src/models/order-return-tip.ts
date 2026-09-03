import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderReturnTip = {
  uid?: string | null;
  appliedMoney?: Money;
  sourceTenderUid?: string | null;
  sourceTenderId?: string | null;
};

export const orderReturnTipSchema: Schema<OrderReturnTip> = s.object<OrderReturnTip>({
  uid: s.optionalNullable(s.string()),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  sourceTenderUid: s.optionalNullable(s.string()),
  sourceTenderId: s.optionalNullable(s.string()),
  _keysMap: {
    appliedMoney: "applied_money",
    sourceTenderUid: "source_tender_uid",
    sourceTenderId: "source_tender_id",
  },
});
