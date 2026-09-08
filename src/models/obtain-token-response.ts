import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Represents an [ObtainToken](api-endpoint:OAuth-ObtainToken) response. */
export type ObtainTokenResponse = {
  /**
   * An OAuth access token used to authorize Square API requests on behalf of the seller. Include
   * this token as a bearer token in the `Authorization` header of your API requests.
   *
   * OAuth access tokens expire in 30 days (except `short_lived` access tokens). You should call
   * `ObtainToken` and provide the returned `refresh_token` to get a new access token well before
   * the current one expires. For more information, see [OAuth API:
   * Walkthrough](https://developer.squareup.com/docs/oauth-api/walkthrough).
   */
  accessToken?: string;
  /** The type of access token. This value is always `bearer`. */
  tokenType?: string;
  /**
   * The timestamp of when the `access_token` expires, in [ISO
   * 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
   */
  expiresAt?: string;
  /**
   * The ID of the authorizing [merchant](entity:Merchant) (seller), which represents a business.
   */
  merchantId?: string;
  /**
   * __LEGACY__ The ID of merchant's subscription. The ID is only present if the merchant signed up
   * for a subscription plan during authorization.
   */
  subscriptionId?: string;
  /**
   * __LEGACY__ The ID of the subscription plan the merchant signed up for. The ID is only present
   * if the merchant signed up for a subscription plan during authorization.
   */
  planId?: string;
  /**
   * The OpenID token that belongs to this person. This token is only present if the `OPENID` scope
   * is included in the authorization request.
   *
   * Deprecated at version 2021-09-15. Square doesn't support OpenID or other single sign-on (SSO)
   * protocols on top of OAuth.
   */
  idToken?: string;
  /**
   * A refresh token that can be used in an `ObtainToken` request to generate a new access token.
   *
   * With the code flow:
   * - For the `authorization_code` grant type, the refresh token is multi-use and never expires.
   * - For the `refresh_token` grant type, the response returns the same refresh token.
   *
   * With the PKCE flow:
   * - For the `authorization_code` grant type, the refresh token is single-use and expires in 90
   *   days.
   * - For the `refresh_token` grant type, the refresh token is a new single-use refresh token that
   *   expires in 90 days.
   *
   * For more information, see [Refresh, Revoke, and Limit the Scope of OAuth
   * Tokens](https://developer.squareup.com/docs/oauth-api/refresh-revoke-limit-scope).
   */
  refreshToken?: string;
  /**
   * Indicates whether the access_token is short lived. If `true`, the access token expires in 24
   * hours. If `false`, the access token expires in 30 days.
   */
  shortLived?: boolean;
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The timestamp of when the `refresh_token` expires, in [ISO
   * 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
   *
   * This field is only returned for the PKCE flow.
   */
  refreshTokenExpiresAt?: string;
};

export const obtainTokenResponseSchema: Schema<ObtainTokenResponse> = s.object<ObtainTokenResponse>({
  accessToken: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  expiresAt: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  subscriptionId: s.optional(s.string()),
  planId: s.optional(s.string()),
  idToken: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  shortLived: s.optional(s.boolean()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  refreshTokenExpiresAt: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresAt: "expires_at",
    merchantId: "merchant_id",
    subscriptionId: "subscription_id",
    planId: "plan_id",
    idToken: "id_token",
    refreshToken: "refresh_token",
    shortLived: "short_lived",
    refreshTokenExpiresAt: "refresh_token_expires_at",
  },
});
