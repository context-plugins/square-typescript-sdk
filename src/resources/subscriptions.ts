import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { bulkSwapPlanRequestSchema, type BulkSwapPlanRequest } from "../models/bulk-swap-plan-request.js";
import { bulkSwapPlanResponseSchema, type BulkSwapPlanResponse } from "../models/bulk-swap-plan-response.js";
import {
  cancelSubscriptionResponseSchema,
  type CancelSubscriptionResponse,
} from "../models/cancel-subscription-response.js";
import {
  changeBillingAnchorDateRequestSchema,
  type ChangeBillingAnchorDateRequest,
} from "../models/change-billing-anchor-date-request.js";
import {
  changeBillingAnchorDateResponseSchema,
  type ChangeBillingAnchorDateResponse,
} from "../models/change-billing-anchor-date-response.js";
import {
  createSubscriptionRequestSchema,
  type CreateSubscriptionRequest,
} from "../models/create-subscription-request.js";
import {
  createSubscriptionResponseSchema,
  type CreateSubscriptionResponse,
} from "../models/create-subscription-response.js";
import {
  deleteSubscriptionActionResponseSchema,
  type DeleteSubscriptionActionResponse,
} from "../models/delete-subscription-action-response.js";
import {
  listSubscriptionEventsResponseSchema,
  type ListSubscriptionEventsResponse,
} from "../models/list-subscription-events-response.js";
import {
  pauseSubscriptionRequestSchema,
  type PauseSubscriptionRequest,
} from "../models/pause-subscription-request.js";
import {
  pauseSubscriptionResponseSchema,
  type PauseSubscriptionResponse,
} from "../models/pause-subscription-response.js";
import {
  resumeSubscriptionRequestSchema,
  type ResumeSubscriptionRequest,
} from "../models/resume-subscription-request.js";
import {
  resumeSubscriptionResponseSchema,
  type ResumeSubscriptionResponse,
} from "../models/resume-subscription-response.js";
import {
  retrieveSubscriptionResponseSchema,
  type RetrieveSubscriptionResponse,
} from "../models/retrieve-subscription-response.js";
import {
  searchSubscriptionsRequestSchema,
  type SearchSubscriptionsRequest,
} from "../models/search-subscriptions-request.js";
import {
  searchSubscriptionsResponseSchema,
  type SearchSubscriptionsResponse,
} from "../models/search-subscriptions-response.js";
import { swapPlanRequestSchema, type SwapPlanRequest } from "../models/swap-plan-request.js";
import { swapPlanResponseSchema, type SwapPlanResponse } from "../models/swap-plan-response.js";
import {
  updateSubscriptionRequestSchema,
  type UpdateSubscriptionRequest,
} from "../models/update-subscription-request.js";
import {
  updateSubscriptionResponseSchema,
  type UpdateSubscriptionResponse,
} from "../models/update-subscription-response.js";
import type { Servers } from "../servers.js";

export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkSwapPlan(
    request: Subscriptions.BulkSwapPlanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkSwapPlanResponse, ResponseError> {
    return this.#rawClient.execute<BulkSwapPlanResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/bulk-swap-plan"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkSwapPlanRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkSwapPlanResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelSubscription(
    request: Subscriptions.CancelSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<CancelSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  changeBillingAnchorDate(
    request: Subscriptions.ChangeBillingAnchorDateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChangeBillingAnchorDateResponse, ResponseError> {
    return this.#rawClient.execute<ChangeBillingAnchorDateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/billing-anchor"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: changeBillingAnchorDateRequestSchema },
      },
      {
        success: { kind: "json", schema: changeBillingAnchorDateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createSubscription(
    request: Subscriptions.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<CreateSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: createSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSubscriptionAction(
    request: Subscriptions.DeleteSubscriptionActionRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSubscriptionActionResponse, ResponseError> {
    return this.#rawClient.execute<DeleteSubscriptionActionResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/actions/{action_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "subscription_id", value: request.subscriptionId, schema: s.string() },
          { name: "action_id", value: request.actionId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteSubscriptionActionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSubscriptionEvents(
    request: Subscriptions.ListSubscriptionEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSubscriptionEventsResponse, ResponseError> {
    return this.#rawClient.execute<ListSubscriptionEventsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/events"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSubscriptionEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  pauseSubscription(
    request: Subscriptions.PauseSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PauseSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<PauseSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/pause"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pauseSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: pauseSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  resumeSubscription(
    request: Subscriptions.ResumeSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ResumeSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<ResumeSubscriptionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/resume"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resumeSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: resumeSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveSubscription(
    request: Subscriptions.RetrieveSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveSubscriptionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchSubscriptions(
    request: Subscriptions.SearchSubscriptionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchSubscriptionsResponse, ResponseError> {
    return this.#rawClient.execute<SearchSubscriptionsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchSubscriptionsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchSubscriptionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  swapPlan(
    request: Subscriptions.SwapPlanRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SwapPlanResponse, ResponseError> {
    return this.#rawClient.execute<SwapPlanResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}/swap-plan"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: swapPlanRequestSchema },
      },
      {
        success: { kind: "json", schema: swapPlanResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSubscription(
    request: Subscriptions.UpdateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateSubscriptionResponse, ResponseError> {
    return this.#rawClient.execute<UpdateSubscriptionResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/subscriptions/{subscription_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "subscription_id", value: request.subscriptionId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: updateSubscriptionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type BulkSwapPlanRequestParams = {
    body: BulkSwapPlanRequest;
  };

  export type CancelSubscriptionRequest = {
    subscriptionId: string;
  };

  export type ChangeBillingAnchorDateRequestParams = {
    subscriptionId: string;
    body: ChangeBillingAnchorDateRequest;
  };

  export type CreateSubscriptionRequestParams = {
    body: CreateSubscriptionRequest;
  };

  export type DeleteSubscriptionActionRequest = {
    subscriptionId: string;
    actionId: string;
  };

  export type ListSubscriptionEventsRequest = {
    subscriptionId: string;
    cursor?: string;
    limit?: number;
  };

  export type PauseSubscriptionRequestParams = {
    subscriptionId: string;
    body: PauseSubscriptionRequest;
  };

  export type ResumeSubscriptionRequestParams = {
    subscriptionId: string;
    body: ResumeSubscriptionRequest;
  };

  export type RetrieveSubscriptionRequest = {
    subscriptionId: string;
    include?: string;
  };

  export type SearchSubscriptionsRequestParams = {
    body: SearchSubscriptionsRequest;
  };

  export type SwapPlanRequestParams = {
    subscriptionId: string;
    body: SwapPlanRequest;
  };

  export type UpdateSubscriptionRequestParams = {
    subscriptionId: string;
    body: UpdateSubscriptionRequest;
  };
}
