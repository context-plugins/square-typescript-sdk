import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details specific to offline payments. */
export type OfflinePaymentDetails = {
  /** The client-side timestamp of when the offline payment was created, in RFC 3339 format. */
  clientCreatedAt?: string;
};

export const offlinePaymentDetailsSchema: Schema<OfflinePaymentDetails> = s.object<OfflinePaymentDetails>({
  clientCreatedAt: s.optional(s.string()),
  _keysMap: {
    clientCreatedAt: "client_created_at",
  },
});
