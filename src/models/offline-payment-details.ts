import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OfflinePaymentDetails = {
  clientCreatedAt?: string;
};

export const offlinePaymentDetailsSchema: Schema<OfflinePaymentDetails> = s.object<OfflinePaymentDetails>({
  clientCreatedAt: s.optional(s.string()),
  _keysMap: {
    clientCreatedAt: "client_created_at",
  },
});
