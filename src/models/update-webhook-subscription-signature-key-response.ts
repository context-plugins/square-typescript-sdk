import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateWebhookSubscriptionSignatureKeyResponse = {
  errors?: Error[];
  signatureKey?: string;
};

export const updateWebhookSubscriptionSignatureKeyResponseSchema: Schema<UpdateWebhookSubscriptionSignatureKeyResponse> =
  s.object<UpdateWebhookSubscriptionSignatureKeyResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    signatureKey: s.optional(s.string()),
    _keysMap: {
      signatureKey: "signature_key",
    },
  });
