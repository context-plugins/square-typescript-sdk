import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deleteSnippetResponseSchema,
  type DeleteSnippetResponse,
} from "../models/delete-snippet-response.js";
import {
  retrieveSnippetResponseSchema,
  type RetrieveSnippetResponse,
} from "../models/retrieve-snippet-response.js";
import { upsertSnippetRequestSchema, type UpsertSnippetRequest } from "../models/upsert-snippet-request.js";
import {
  upsertSnippetResponseSchema,
  type UpsertSnippetResponse,
} from "../models/upsert-snippet-response.js";
import type { Servers } from "../servers.js";

export class Snippets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteSnippet(
    request: Snippets.DeleteSnippetRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSnippetResponse, ResponseError> {
    return this.#rawClient.execute<DeleteSnippetResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteSnippetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveSnippet(
    request: Snippets.RetrieveSnippetRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveSnippetResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveSnippetResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveSnippetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertSnippet(
    request: Snippets.UpsertSnippetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertSnippetResponse, ResponseError> {
    return this.#rawClient.execute<UpsertSnippetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertSnippetRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertSnippetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Snippets {
  export type DeleteSnippetRequest = {
    siteId: string;
  };

  export type RetrieveSnippetRequest = {
    siteId: string;
  };

  export type UpsertSnippetRequestParams = {
    siteId: string;
    body: UpsertSnippetRequest;
  };
}
