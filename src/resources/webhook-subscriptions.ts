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
    body: CreateWebhookSubscriptionRequest;
  };

  export type DeleteWebhookSubscriptionRequest = {
    subscriptionId: string;
  };

  export type ListWebhookEventTypesRequest = {
    apiVersion?: string;
  };

  export type ListWebhookSubscriptionsRequest = {
    cursor?: string;
    includeDisabled?: boolean;
    sortOrder?: SortOrder;
    limit?: number;
  };

  export type RetrieveWebhookSubscriptionRequest = {
    subscriptionId: string;
  };

  export type TestWebhookSubscriptionRequestParams = {
    subscriptionId: string;
    body: TestWebhookSubscriptionRequest;
  };

  export type UpdateWebhookSubscriptionRequestParams = {
    subscriptionId: string;
    body: UpdateWebhookSubscriptionRequest;
  };

  export type UpdateWebhookSubscriptionSignatureKeyRequestParams = {
    subscriptionId: string;
    body: UpdateWebhookSubscriptionSignatureKeyRequest;
  };
}
