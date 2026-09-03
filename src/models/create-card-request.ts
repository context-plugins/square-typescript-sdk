import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type CreateCardRequest = {
  idempotencyKey: string;
  sourceId: string;
  verificationToken?: string;
  card: Card;
};

export const createCardRequestSchema: Schema<CreateCardRequest> = s.object<CreateCardRequest>({
  idempotencyKey: s.string(),
  sourceId: s.string(),
  verificationToken: s.optional(s.string()),
  card: cardSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
    sourceId: "source_id",
    verificationToken: "verification_token",
  },
});
