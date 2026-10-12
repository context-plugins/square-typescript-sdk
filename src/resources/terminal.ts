import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelTerminalActionResponseSchema,
  type CancelTerminalActionResponse,
} from "../models/cancel-terminal-action-response.js";
import {
  cancelTerminalCheckoutResponseSchema,
  type CancelTerminalCheckoutResponse,
} from "../models/cancel-terminal-checkout-response.js";
import {
  cancelTerminalRefundResponseSchema,
  type CancelTerminalRefundResponse,
} from "../models/cancel-terminal-refund-response.js";
import {
  createTerminalActionRequestSchema,
  type CreateTerminalActionRequest,
} from "../models/create-terminal-action-request.js";
import {
  createTerminalActionResponseSchema,
  type CreateTerminalActionResponse,
} from "../models/create-terminal-action-response.js";
import {
  createTerminalCheckoutRequestSchema,
  type CreateTerminalCheckoutRequest,
} from "../models/create-terminal-checkout-request.js";
import {
  createTerminalCheckoutResponseSchema,
  type CreateTerminalCheckoutResponse,
} from "../models/create-terminal-checkout-response.js";
import {
  createTerminalRefundRequestSchema,
  type CreateTerminalRefundRequest,
} from "../models/create-terminal-refund-request.js";
import {
  createTerminalRefundResponseSchema,
  type CreateTerminalRefundResponse,
} from "../models/create-terminal-refund-response.js";
import {
  dismissTerminalActionResponseSchema,
  type DismissTerminalActionResponse,
} from "../models/dismiss-terminal-action-response.js";
import {
  dismissTerminalCheckoutResponseSchema,
  type DismissTerminalCheckoutResponse,
} from "../models/dismiss-terminal-checkout-response.js";
import {
  dismissTerminalRefundResponseSchema,
  type DismissTerminalRefundResponse,
} from "../models/dismiss-terminal-refund-response.js";
import {
  getTerminalActionResponseSchema,
  type GetTerminalActionResponse,
} from "../models/get-terminal-action-response.js";
import {
  getTerminalCheckoutResponseSchema,
  type GetTerminalCheckoutResponse,
} from "../models/get-terminal-checkout-response.js";
import {
  getTerminalRefundResponseSchema,
  type GetTerminalRefundResponse,
} from "../models/get-terminal-refund-response.js";
import {
  searchTerminalActionsRequestSchema,
  type SearchTerminalActionsRequest,
} from "../models/search-terminal-actions-request.js";
import {
  searchTerminalActionsResponseSchema,
  type SearchTerminalActionsResponse,
} from "../models/search-terminal-actions-response.js";
import {
  searchTerminalCheckoutsRequestSchema,
  type SearchTerminalCheckoutsRequest,
} from "../models/search-terminal-checkouts-request.js";
import {
  searchTerminalCheckoutsResponseSchema,
  type SearchTerminalCheckoutsResponse,
} from "../models/search-terminal-checkouts-response.js";
import {
  searchTerminalRefundsRequestSchema,
  type SearchTerminalRefundsRequest,
} from "../models/search-terminal-refunds-request.js";
import {
  searchTerminalRefundsResponseSchema,
  type SearchTerminalRefundsResponse,
} from "../models/search-terminal-refunds-response.js";
import type { Servers } from "../servers.js";

export class Terminal {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CancelTerminalAction
   *
   * @remarks
   * Cancels a Terminal action request if the status of the request permits it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTerminalAction(
    request: Terminal.CancelTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalActionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/actions/{action_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalActionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CancelTerminalCheckout
   *
   * @remarks
   * Cancels a Terminal checkout request if the status of the request permits it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTerminalCheckout(
    request: Terminal.CancelTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalCheckoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/checkouts/{checkout_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalCheckoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CancelTerminalRefund
   *
   * @remarks
   * Cancels an Interac Terminal refund request by refund request ID if the status of the request
   * permits it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTerminalRefund(
    request: Terminal.CancelTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalRefundResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalRefundResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateTerminalAction
   *
   * @remarks
   * Creates a Terminal action request and sends it to the specified device.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTerminalAction(
    request: Terminal.CreateTerminalActionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalActionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/actions"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTerminalActionRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalActionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateTerminalCheckout
   *
   * @remarks
   * Creates a Terminal checkout request and sends it to the specified device to take a payment for
   * the requested amount.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTerminalCheckout(
    request: Terminal.CreateTerminalCheckoutRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalCheckoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/checkouts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTerminalCheckoutRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalCheckoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateTerminalRefund
   *
   * @remarks
   * Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for
   * Interac payments on a Square Terminal are supported only for Interac debit cards in Canada.
   * Other refunds for Terminal payments should use the Refunds API. For more information, see
   * [Refunds API](api:Refunds).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTerminalRefund(
    request: Terminal.CreateTerminalRefundRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalRefundResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/refunds"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTerminalRefundRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalRefundResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DismissTerminalAction
   *
   * @remarks
   * Dismisses a Terminal action request if the status and type of the request permits it.
   *
   * See [Link and Dismiss
   * Actions](https://developer.squareup.com/docs/terminal-api/advanced-features/custom-workflows/link-and-dismiss-actions)
   * for more details.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dismissTerminalAction(
    request: Terminal.DismissTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalActionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/actions/{action_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalActionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DismissTerminalCheckout
   *
   * @remarks
   * Dismisses a Terminal checkout request if the status and type of the request permits it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dismissTerminalCheckout(
    request: Terminal.DismissTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalCheckoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/checkouts/{checkout_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalCheckoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DismissTerminalRefund
   *
   * @remarks
   * Dismisses a Terminal refund request if the status and type of the request permits it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dismissTerminalRefund(
    request: Terminal.DismissTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalRefundResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalRefundResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetTerminalAction
   *
   * @remarks
   * Retrieves a Terminal action request by `action_id`. Terminal action requests are available for
   * 30 days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalAction(
    request: Terminal.GetTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalActionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/actions/{action_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalActionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetTerminalCheckout
   *
   * @remarks
   * Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are
   * available for 30 days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalCheckout(
    request: Terminal.GetTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalCheckoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/checkouts/{checkout_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalCheckoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetTerminalRefund
   *
   * @remarks
   * Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30
   * days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalRefund(
    request: Terminal.GetTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalRefundResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalRefundResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchTerminalActions
   *
   * @remarks
   * Retrieves a filtered list of Terminal action requests created by the account making the
   * request. Terminal action requests are available for 30 days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTerminalActions(
    request: Terminal.SearchTerminalActionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalActionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/actions/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchTerminalActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalActionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchTerminalCheckouts
   *
   * @remarks
   * Returns a filtered list of Terminal checkout requests created by the application making the
   * request. Only Terminal checkout requests created for the merchant scoped to the OAuth token are
   * returned. Terminal checkout requests are available for 30 days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTerminalCheckouts(
    request: Terminal.SearchTerminalCheckoutsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalCheckoutsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/checkouts/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchTerminalCheckoutsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalCheckoutsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchTerminalRefunds
   *
   * @remarks
   * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the
   * request. Terminal refund requests are available for 30 days.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTerminalRefunds(
    request: Terminal.SearchTerminalRefundsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalRefundsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/refunds/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchTerminalRefundsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalRefundsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Terminal {
  export type CancelTerminalActionRequest = {
    /** Unique ID for the desired `TerminalAction`. */
    actionId: string;
  };

  export type CancelTerminalCheckoutRequest = {
    /** The unique ID for the desired `TerminalCheckout`. */
    checkoutId: string;
  };

  export type CancelTerminalRefundRequest = {
    /** The unique ID for the desired `TerminalRefund`. */
    terminalRefundId: string;
  };

  export type CreateTerminalActionRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTerminalActionRequest;
  };

  export type CreateTerminalCheckoutRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTerminalCheckoutRequest;
  };

  export type CreateTerminalRefundRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTerminalRefundRequest;
  };

  export type DismissTerminalActionRequest = {
    /** Unique ID for the `TerminalAction` associated with the action to be dismissed. */
    actionId: string;
  };

  export type DismissTerminalCheckoutRequest = {
    /** Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed. */
    checkoutId: string;
  };

  export type DismissTerminalRefundRequest = {
    /** Unique ID for the `TerminalRefund` associated with the refund to be dismissed. */
    terminalRefundId: string;
  };

  export type GetTerminalActionRequest = {
    /** Unique ID for the desired `TerminalAction`. */
    actionId: string;
  };

  export type GetTerminalCheckoutRequest = {
    /** The unique ID for the desired `TerminalCheckout`. */
    checkoutId: string;
  };

  export type GetTerminalRefundRequest = {
    /** The unique ID for the desired `TerminalRefund`. */
    terminalRefundId: string;
  };

  export type SearchTerminalActionsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTerminalActionsRequest;
  };

  export type SearchTerminalCheckoutsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTerminalCheckoutsRequest;
  };

  export type SearchTerminalRefundsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTerminalRefundsRequest;
  };
}
