import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  cancelTerminalAction(
    request: Terminal.CancelTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalActionResponse, ResponseError> {
    return this.#rawClient.execute<CancelTerminalActionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/actions/{action_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalActionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelTerminalCheckout(
    request: Terminal.CancelTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalCheckoutResponse, ResponseError> {
    return this.#rawClient.execute<CancelTerminalCheckoutResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/checkouts/{checkout_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalCheckoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelTerminalRefund(
    request: Terminal.CancelTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelTerminalRefundResponse, ResponseError> {
    return this.#rawClient.execute<CancelTerminalRefundResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelTerminalRefundResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTerminalAction(
    request: Terminal.CreateTerminalActionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalActionResponse, ResponseError> {
    return this.#rawClient.execute<CreateTerminalActionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/actions"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTerminalActionRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalActionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTerminalCheckout(
    request: Terminal.CreateTerminalCheckoutRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalCheckoutResponse, ResponseError> {
    return this.#rawClient.execute<CreateTerminalCheckoutResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/checkouts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTerminalCheckoutRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalCheckoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTerminalRefund(
    request: Terminal.CreateTerminalRefundRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTerminalRefundResponse, ResponseError> {
    return this.#rawClient.execute<CreateTerminalRefundResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/refunds"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTerminalRefundRequestSchema },
      },
      {
        success: { kind: "json", schema: createTerminalRefundResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  dismissTerminalAction(
    request: Terminal.DismissTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalActionResponse, ResponseError> {
    return this.#rawClient.execute<DismissTerminalActionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/actions/{action_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalActionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  dismissTerminalCheckout(
    request: Terminal.DismissTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalCheckoutResponse, ResponseError> {
    return this.#rawClient.execute<DismissTerminalCheckoutResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/checkouts/{checkout_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalCheckoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  dismissTerminalRefund(
    request: Terminal.DismissTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<DismissTerminalRefundResponse, ResponseError> {
    return this.#rawClient.execute<DismissTerminalRefundResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}/dismiss"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dismissTerminalRefundResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTerminalAction(
    request: Terminal.GetTerminalActionRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalActionResponse, ResponseError> {
    return this.#rawClient.execute<GetTerminalActionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/terminals/actions/{action_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "action_id", value: request.actionId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalActionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTerminalCheckout(
    request: Terminal.GetTerminalCheckoutRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalCheckoutResponse, ResponseError> {
    return this.#rawClient.execute<GetTerminalCheckoutResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/terminals/checkouts/{checkout_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "checkout_id", value: request.checkoutId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalCheckoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTerminalRefund(
    request: Terminal.GetTerminalRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTerminalRefundResponse, ResponseError> {
    return this.#rawClient.execute<GetTerminalRefundResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/terminals/refunds/{terminal_refund_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "terminal_refund_id", value: request.terminalRefundId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTerminalRefundResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTerminalActions(
    request: Terminal.SearchTerminalActionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalActionsResponse, ResponseError> {
    return this.#rawClient.execute<SearchTerminalActionsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/actions/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTerminalActionsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalActionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTerminalCheckouts(
    request: Terminal.SearchTerminalCheckoutsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalCheckoutsResponse, ResponseError> {
    return this.#rawClient.execute<SearchTerminalCheckoutsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/checkouts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTerminalCheckoutsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalCheckoutsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTerminalRefunds(
    request: Terminal.SearchTerminalRefundsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTerminalRefundsResponse, ResponseError> {
    return this.#rawClient.execute<SearchTerminalRefundsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/terminals/refunds/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTerminalRefundsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTerminalRefundsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Terminal {
  export type CancelTerminalActionRequest = {
    actionId: string;
  };

  export type CancelTerminalCheckoutRequest = {
    checkoutId: string;
  };

  export type CancelTerminalRefundRequest = {
    terminalRefundId: string;
  };

  export type CreateTerminalActionRequestParams = {
    body: CreateTerminalActionRequest;
  };

  export type CreateTerminalCheckoutRequestParams = {
    body: CreateTerminalCheckoutRequest;
  };

  export type CreateTerminalRefundRequestParams = {
    body: CreateTerminalRefundRequest;
  };

  export type DismissTerminalActionRequest = {
    actionId: string;
  };

  export type DismissTerminalCheckoutRequest = {
    checkoutId: string;
  };

  export type DismissTerminalRefundRequest = {
    terminalRefundId: string;
  };

  export type GetTerminalActionRequest = {
    actionId: string;
  };

  export type GetTerminalCheckoutRequest = {
    checkoutId: string;
  };

  export type GetTerminalRefundRequest = {
    terminalRefundId: string;
  };

  export type SearchTerminalActionsRequestParams = {
    body: SearchTerminalActionsRequest;
  };

  export type SearchTerminalCheckoutsRequestParams = {
    body: SearchTerminalCheckoutsRequest;
  };

  export type SearchTerminalRefundsRequestParams = {
    body: SearchTerminalRefundsRequest;
  };
}
