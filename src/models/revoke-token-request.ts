import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevokeTokenRequest = {
  /**
   * The Square-issued ID for your application, which is available on the **OAuth** page in the
   * [Developer Dashboard](https://developer.squareup.com/apps).
   */
  clientId?: string | null;
  /**
   * The access token of the merchant whose token you want to revoke. Do not provide a value for
   * `merchant_id` if you provide this parameter.
   */
  accessToken?: string | null;
  /**
   * The ID of the merchant whose token you want to revoke. Do not provide a value for
   * `access_token` if you provide this parameter.
   */
  merchantId?: string | null;
  /**
   * If `true`, terminate the given single access token, but do not terminate the entire
   * authorization. Default: `false`
   */
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
