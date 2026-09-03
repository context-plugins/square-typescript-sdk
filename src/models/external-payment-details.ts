import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type ExternalPaymentDetails = {
  type: string;
  source: string;
  sourceId?: string | null;
  sourceFeeMoney?: Money;
};

export const externalPaymentDetailsSchema: Schema<ExternalPaymentDetails> = s.object<ExternalPaymentDetails>({
  type: s.string(),
  source: s.string(),
  sourceId: s.optionalNullable(s.string()),
  sourceFeeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    sourceId: "source_id",
    sourceFeeMoney: "source_fee_money",
  },
});
