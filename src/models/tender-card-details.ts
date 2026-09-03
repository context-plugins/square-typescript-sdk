import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import {
  tenderCardDetailsEntryMethodSchema,
  type TenderCardDetailsEntryMethod,
} from "./tender-card-details-entry-method.js";
import { tenderCardDetailsStatusSchema, type TenderCardDetailsStatus } from "./tender-card-details-status.js";

export type TenderCardDetails = {
  status?: TenderCardDetailsStatus;
  card?: Card;
  entryMethod?: TenderCardDetailsEntryMethod;
};

export const tenderCardDetailsSchema: Schema<TenderCardDetails> = s.object<TenderCardDetails>({
  status: s.optional(s.lazy(() => tenderCardDetailsStatusSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  entryMethod: s.optional(s.lazy(() => tenderCardDetailsEntryMethodSchema)),
  _keysMap: {
    entryMethod: "entry_method",
  },
});
