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

  /**
   * BulkSwapPlan
   *
   * @remarks
   * Schedules a plan variation change for all active subscriptions under a given plan variation.
   * For more information, see [Swap Subscription Plan
   * Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CancelSubscription
   *
   * @remarks
   * Schedules a `CANCEL` action to cancel an active subscription. This sets the `canceled_date`
   * field to the end of the active billing period. After this date, the subscription status changes
   * from ACTIVE to CANCELED.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ChangeBillingAnchorDate
   *
   * @remarks
   * Changes the [billing anchor
   * date](https://developer.squareup.com/docs/subscriptions-api/subscription-billing#billing-dates)
   * for a subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreateSubscription
   *
   * @remarks
   * Enrolls a customer in a subscription.
   *
   * If you provide a card on file in the request, Square charges the card for the subscription.
   * Otherwise, Square sends an invoice to the customer's email address. The subscription starts
   * immediately, unless the request includes the optional `start_date`. Each individual
   * subscription is associated with a particular location.
   *
   * For more information, see [Create a
   * subscription](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions#create-a-subscription).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * DeleteSubscriptionAction
   *
   * @remarks
   * Deletes a scheduled action for a subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListSubscriptionEvents
   *
   * @remarks
   * Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a
   * specific subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * PauseSubscription
   *
   * @remarks
   * Schedules a `PAUSE` action to pause an active subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ResumeSubscription
   *
   * @remarks
   * Schedules a `RESUME` action to resume a paused or a deactivated subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * RetrieveSubscription
   *
   * @remarks
   * Retrieves a specific subscription.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * SearchSubscriptions
   *
   * @remarks
   * Searches for subscriptions.
   *
   * Results are ordered chronologically by subscription creation date. If the request specifies
   * more than one location ID, the endpoint orders the result by location ID, and then by creation
   * date within each location. If no locations are given in the query, all locations are searched.
   *
   * You can also optionally specify `customer_ids` to search by customer. If left unset, all
   * customers associated with the specified locations are returned. If the request specifies
   * customer IDs, the endpoint orders results first by location, within location by customer ID,
   * and within customer by subscription creation date.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * SwapPlan
   *
   * @remarks
   * Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing
   * subscription. For more information, see [Swap Subscription Plan
   * Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdateSubscription
   *
   * @remarks
   * Updates a subscription by modifying or clearing `subscription` field values. To clear a field,
   * set its value to `null`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkSwapPlanRequest;
  };

  export type CancelSubscriptionRequest = {
    /** The ID of the subscription to cancel. */
    subscriptionId: string;
  };

  export type ChangeBillingAnchorDateRequestParams = {
    /** The ID of the subscription to update the billing anchor date. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: ChangeBillingAnchorDateRequest;
  };

  export type CreateSubscriptionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateSubscriptionRequest;
  };

  export type DeleteSubscriptionActionRequest = {
    /** The ID of the subscription the targeted action is to act upon. */
    subscriptionId: string;
    /** The ID of the targeted action to be deleted. */
    actionId: string;
  };

  export type ListSubscriptionEventsRequest = {
    /** The ID of the subscription to retrieve the events for. */
    subscriptionId: string;
    /**
     * When the total number of resulting subscription events exceeds the limit of a paged response,
     * specify the cursor returned from a preceding response here to fetch the next set of results.
     * If the cursor is unset, the response contains the last page of the results.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** The upper limit on the number of subscription events to return in a paged response. */
    limit?: number;
  };

  export type PauseSubscriptionRequestParams = {
    /** The ID of the subscription to pause. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: PauseSubscriptionRequest;
  };

  export type ResumeSubscriptionRequestParams = {
    /** The ID of the subscription to resume. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: ResumeSubscriptionRequest;
  };

  export type RetrieveSubscriptionRequest = {
    /** The ID of the subscription to retrieve. */
    subscriptionId: string;
    /**
     * A query parameter to specify related information to be included in the response.
     *
     * The supported query parameter values are:
     *
     * - `actions`: to include scheduled actions on the targeted subscription.
     */
    include?: string;
  };

  export type SearchSubscriptionsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchSubscriptionsRequest;
  };

  export type SwapPlanRequestParams = {
    /** The ID of the subscription to swap the subscription plan for. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SwapPlanRequest;
  };

  export type UpdateSubscriptionRequestParams = {
    /** The ID of the subscription to update. */
    subscriptionId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateSubscriptionRequest;
  };
}
