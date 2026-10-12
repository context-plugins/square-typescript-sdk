import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * DeleteSnippet
   *
   * @remarks
   * Removes your snippet from a Square Online site.
   *
   * You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong
   * to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For
   * more information, see [Early access program for Square Online
   * APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSnippet(
    request: Snippets.DeleteSnippetRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSnippetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteSnippetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveSnippet
   *
   * @remarks
   * Retrieves your snippet from a Square Online site. A site can contain snippets from multiple
   * snippet applications, but you can retrieve only the snippet that was added by your application.
   *
   * You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong
   * to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For
   * more information, see [Early access program for Square Online
   * APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveSnippet(
    request: Snippets.RetrieveSnippetRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveSnippetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveSnippetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpsertSnippet
   *
   * @remarks
   * Adds a snippet to a Square Online site or updates the existing snippet on the site. The snippet
   * code is appended to the end of the `head` element on every page of the site, except checkout
   * pages. A snippet application can add one snippet to a given site.
   *
   * You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong
   * to a seller.
   *
   *
   * __Note:__ Square Online APIs are publicly available as part of an early access program. For
   * more information, see [Early access program for Square Online
   * APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertSnippet(
    request: Snippets.UpsertSnippetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertSnippetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/sites/{site_id}/snippet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "site_id", value: request.siteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertSnippetRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertSnippetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Snippets {
  export type DeleteSnippetRequest = {
    /** The ID of the site that contains the snippet. */
    siteId: string;
  };

  export type RetrieveSnippetRequest = {
    /** The ID of the site that contains the snippet. */
    siteId: string;
  };

  export type UpsertSnippetRequestParams = {
    /** The ID of the site where you want to add or update the snippet. */
    siteId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpsertSnippetRequest;
  };
}
