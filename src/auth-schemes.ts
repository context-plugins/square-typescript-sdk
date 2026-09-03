import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly oauth2: AuthScheme;
  readonly oauth2ClientSecret: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    oauth2: oauth2RefreshableScheme(
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/oauth2/authorize"),
          tokenUrl: servers.default("/oauth2/token"),
          rawClient,
          placement: "header",
        }),
    ),
    oauth2ClientSecret: apiKeyHeaderAuth({ name: "Authorization", token: options.oauth2ClientSecret }),
  };
}
