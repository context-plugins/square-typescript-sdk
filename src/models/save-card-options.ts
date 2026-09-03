import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SaveCardOptions = {
  customerId: string;
  cardId?: string;
  referenceId?: string | null;
};

export const saveCardOptionsSchema: Schema<SaveCardOptions> = s.object<SaveCardOptions>({
  customerId: s.string(),
  cardId: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  _keysMap: {
    customerId: "customer_id",
    cardId: "card_id",
    referenceId: "reference_id",
  },
});
