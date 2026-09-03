import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ObtainTokenResponse = {
  accessToken?: string;
  tokenType?: string;
  expiresAt?: string;
  merchantId?: string;
  subscriptionId?: string;
  planId?: string;
  idToken?: string;
  refreshToken?: string;
  shortLived?: boolean;
  errors?: Error[];
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
