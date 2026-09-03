import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ObtainTokenRequest = {
  clientId: string;
  clientSecret?: string | null;
  code?: string | null;
  redirectUri?: string | null;
  grantType: string;
  refreshToken?: string | null;
  migrationToken?: string | null;
  scopes?: string[] | null;
  shortLived?: boolean | null;
  codeVerifier?: string | null;
  useJwt?: boolean | null;
};

export const obtainTokenRequestSchema: Schema<ObtainTokenRequest> = s.object<ObtainTokenRequest>({
  clientId: s.string(),
  clientSecret: s.optionalNullable(s.string()),
  code: s.optionalNullable(s.string()),
  redirectUri: s.optionalNullable(s.string()),
  grantType: s.string(),
  refreshToken: s.optionalNullable(s.string()),
  migrationToken: s.optionalNullable(s.string()),
  scopes: s.optionalNullable(s.array(s.string())),
  shortLived: s.optionalNullable(s.boolean()),
  codeVerifier: s.optionalNullable(s.string()),
  useJwt: s.optionalNullable(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
    redirectUri: "redirect_uri",
    grantType: "grant_type",
    refreshToken: "refresh_token",
    migrationToken: "migration_token",
    shortLived: "short_lived",
    codeVerifier: "code_verifier",
    useJwt: "use_jwt",
  },
});
