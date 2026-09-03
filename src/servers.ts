import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Production: "production",
  Sandbox: "sandbox",
  Custom: "custom",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type DefaultServerOptions = {
  production?: { baseUrl?: string };
  sandbox?: { baseUrl?: string };
  custom?: { baseUrl?: string; customUrl?: string };
};

export type ServerOptions = {
  default?: DefaultServerOptions;
};

export type Servers = {
  default: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  default: {
    production: { baseUrl: "https://connect.squareup.com" },
    sandbox: { baseUrl: "https://connect.squareupsandbox.com" },
    custom: { baseUrl: "{custom_url}", customUrl: "https://connect.squareup.com" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    default: (s) => defaultServer(environment, s, options.default),
  };
}

function defaultServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DefaultServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Sandbox: {
      const sandbox = { ...DEFAULT_SERVER_OPTIONS.default.sandbox, ...options?.sandbox };
      return { baseUrl: sandbox.baseUrl, subPath };
    }
    case ServerEnvironment.Custom: {
      const custom = { ...DEFAULT_SERVER_OPTIONS.default.custom, ...options?.custom };
      return {
        baseUrl: custom.baseUrl,
        subPath,
        variables: { custom_url: custom.customUrl },
      };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
