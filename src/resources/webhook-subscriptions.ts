import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createWebhookSubscriptionRequestSchema,
  type CreateWebhookSubscriptionRequest,
} from "../models/create-webhook-subscription-request.js";
import {
  createWebhookSubscriptionResponseSchema,
  type CreateWebhookSubscriptionResponse,
} from "../models/create-webhook-subscription-response.js";
import {
  deleteWebhookSubscriptionResponseSchema,
  type DeleteWebhookSubscriptionResponse,
} from "../models/delete-webhook-subscription-response.js";
import {
  listWebhookEventTypesResponseSchema,
  type ListWebhookEventTypesResponse,
} from "../models/list-webhook-event-types-response.js";
import {
  listWebhookSubscriptionsResponseSchema,
  type ListWebhookSubscriptionsResponse,
} from "../models/list-webhook-subscriptions-response.js";
import {
  retrieveWebhookSubscriptionResponseSchema,
  type RetrieveWebhookSubscriptionResponse,
} from "../models/retrieve-webhook-subscription-response.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  testWebhookSubscriptionRequestSchema,
  type TestWebhookSubscriptionRequest,
} from "../models/test-webhook-subscription-request.js";
import {
  testWebhookSubscriptionResponseSchema,
  type TestWebhookSubscriptionResponse,
} from "../models/test-webhook-subscription-response.js";
import {
  updateWebhookSubscriptionRequestSchema,
  type UpdateWebhookSubscriptionRequest,
} from "../models/update-webhook-subscription-request.js";
import {
  updateWebhookSubscriptionResponseSchema,
  type UpdateWebhookSubscriptionResponse,
} from "../models/update-webhook-subscription-response.js";
import {
  updateWebhookSubscriptionSignatureKeyRequestSchema,
  type UpdateWebhookSubscriptionSignatureKeyRequest,
} from "../models/update-webhook-subscription-signature-key-request.js";
import {
  updateWebhookSubscriptionSignatureKeyResponseSchema,
  type UpdateWebhookSubscriptionSignatureKeyResponse,
} from "../models/update-webhook-subscription-signature-key-response.js";
import type { Servers } from "../servers.js";

export class WebhookSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CreateWebhookSubscription
   *
   * @remarks
   * Creates a webhook subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createWebhookSubscription(
    request: WebhookSubscriptions.CreateWebhookSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateWebhookSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<CreateWebhookSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/webhooks/subscriptions"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createWebhookSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: createWebhookSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteWebhookSubscription
   *
   * @remarks
   * Deletes a webhook subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteWebhookSubscription(
    request: WebhookSubscriptions.DeleteWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteWebhookSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteWebhookSubscriptionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/webhooks/subscriptions/{subscription_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteWebhookSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListWebhookEventTypes
   *
   * @remarks
   * Lists all webhook event types that can be subscribed to.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listWebhookEventTypes(
    request: WebhookSubscriptions.ListWebhookEventTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhookEventTypesResponse, ResponseError> {
    return this.#rawClient.execute<ListWebhookEventTypesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/webhooks/event-types"),
        auth: this.#auth.oauth2,
        query: [{ name: "api_version", value: request.apiVersion, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhookEventTypesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListWebhookSubscriptions
   *
   * @remarks
   * Lists all webhook subscriptions owned by your application.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listWebhookSubscriptions(
    request: WebhookSubscriptions.ListWebhookSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhookSubscriptionsResponse, ResponseError> {
    return this.#rawClient.execute<ListWebhookSubscriptionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/webhooks/subscriptions"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "include_disabled",
            value: request.includeDisabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhookSubscriptionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveWebhookSubscription
   *
   * @remarks
   * Retrieves a webhook subscription identified by its ID.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveWebhookSubscription(
    request: WebhookSubscriptions.RetrieveWebhookSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveWebhookSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveWebhookSubscriptionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/webhooks/subscriptions/{subscription_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveWebhookSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * TestWebhookSubscription
   *
   * @remarks
   * Tests a webhook subscription by sending a test event to the notification URL.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  testWebhookSubscription(
    request: WebhookSubscriptions.TestWebhookSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TestWebhookSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<TestWebhookSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/webhooks/subscriptions/{subscription_id}/test"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: testWebhookSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: testWebhookSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateWebhookSubscription
   *
   * @remarks
   * Updates a webhook subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateWebhookSubscription(
    request: WebhookSubscriptions.UpdateWebhookSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWebhookSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateWebhookSubscriptionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/webhooks/subscriptions/{subscription_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWebhookSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: updateWebhookSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateWebhookSubscriptionSignatureKey
   *
   * @remarks
   * Updates a webhook subscription by replacing the existing signature key with a new one.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateWebhookSubscriptionSignatureKey(
    request: WebhookSubscriptions.UpdateWebhookSubscriptionSignatureKeyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWebhookSubscriptionSignatureKeyResponse, ResponseError> {
    return this.#rawClient.execute<UpdateWebhookSubscriptionSignatureKeyResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/webhooks/subscriptions/{subscription_id}/signature-key"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: updateWebhookSubscriptionSignatureKeyRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: updateWebhookSubscriptionSignatureKeyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace WebhookSubscriptions {
  export type CreateWebhookSubscriptionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateWebhookSubscriptionRequest;
  };

  export type DeleteWebhookSubscriptionRequest = {
    /** [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete. */
    subscriptionId: string;
  };

  export type ListWebhookEventTypesRequest = {
    /**
     * The API version for which to list event types. Setting this field overrides the default
     * version used by the application.
     */
    apiVersion?: string;
  };

  export type ListWebhookSubscriptionsRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for your original query.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * Includes disabled [Subscription](entity:WebhookSubscription)s. By default, all enabled
     * [Subscription](entity:WebhookSubscription)s are returned.
     *
     * @default false
     */
    includeDisabled?: boolean;
    /**
     * Sorts the returned list by when the [Subscription](entity:WebhookSubscription) was created
     * with the specified order. This field defaults to ASC.
     */
    sortOrder?: SortOrder;
    /**
     * The maximum number of results to be returned in a single page. It is possible to receive
     * fewer results than the specified limit on a given page. The default value of 100 is also the
     * maximum allowed value.
     *
     * Default: 100
     */
    limit?: number;
  };

  export type RetrieveWebhookSubscriptionRequest = {
    /** [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve. */
    subscriptionId: string;
  };

  export type TestWebhookSubscriptionRequestParams = {
    /** [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to test. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: TestWebhookSubscriptionRequest;
  };

  export type UpdateWebhookSubscriptionRequestParams = {
    /** [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateWebhookSubscriptionRequest;
  };

  export type UpdateWebhookSubscriptionSignatureKeyRequestParams = {
    /** [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateWebhookSubscriptionSignatureKeyRequest;
  };
}
