import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompletePaymentRequest = {
  versionToken?: string | null;
};

export const completePaymentRequestSchema: Schema<CompletePaymentRequest> = s.object<CompletePaymentRequest>({
  versionToken: s.optionalNullable(s.string()),
  _keysMap: {
    versionToken: "version_token",
  },
});
