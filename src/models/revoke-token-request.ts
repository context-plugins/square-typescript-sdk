import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevokeTokenRequest = {
  clientId?: string | null;
  accessToken?: string | null;
  merchantId?: string | null;
  revokeOnlyAccessToken?: boolean | null;
};

export const revokeTokenRequestSchema: Schema<RevokeTokenRequest> = s.object<RevokeTokenRequest>({
  clientId: s.optionalNullable(s.string()),
  accessToken: s.optionalNullable(s.string()),
  merchantId: s.optionalNullable(s.string()),
  revokeOnlyAccessToken: s.optionalNullable(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    merchantId: "merchant_id",
    revokeOnlyAccessToken: "revoke_only_access_token",
  },
});
