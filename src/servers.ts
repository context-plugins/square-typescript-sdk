import type { ClientOptions } from "./client-options.js";
import type { ServerBase, UrlTemplate } from "./core/api-request.js";
import { ConfigurationError } from "./core/errors.js";
import { resolveBaseUrl } from "./core/url.js";
import * as s from "./core/validation/index.js";

export const ServerEnvironment = {
  Production: "production",
  Sandbox: "sandbox",
  Custom: "custom",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type Servers = {
  default: <Path extends string>(subPath: Path) => UrlTemplate<Path>;
};

const productionSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://connect.squareup.com")),
};

const sandboxSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "https://connect.squareupsandbox.com")),
};

const customSchemas = {
  baseUrl: s.of(s.defaulted(s.string(), "{custom_url}")),
  customUrl: s.of(s.defaulted(s.string(), "https://connect.squareup.com")),
};

export function buildServers(options: ClientOptions): Servers {
  const base = {
    default: resolveBaseUrl(defaultServer(options)),
  };
  return {
    default: (subPath) => ({ baseUrl: base.default, subPath }),
  };
}

function defaultServer(options: ClientOptions): ServerBase {
  const environment = options.serverEnvironment;
  switch (environment) {
    case ServerEnvironment.Production:
    case undefined:
      return { baseUrl: productionSchemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Sandbox:
      return { baseUrl: sandboxSchemas.baseUrl.decode(options.serverOptions?.baseUrl) };
    case ServerEnvironment.Custom:
      return {
        baseUrl: customSchemas.baseUrl.decode(options.serverOptions?.baseUrl),
        variables: { custom_url: customSchemas.customUrl.decode(options.serverOptions?.customUrl) },
      };
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new ConfigurationError(`Unknown server environment: ${String(environment)}`);
}
