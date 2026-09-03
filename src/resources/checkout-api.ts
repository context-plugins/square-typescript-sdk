import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createCheckoutRequestSchema,
  type CreateCheckoutRequest,
} from "../models/create-checkout-request.js";
import {
  createCheckoutResponseSchema,
  type CreateCheckoutResponse,
} from "../models/create-checkout-response.js";
import {
  createPaymentLinkRequestSchema,
  type CreatePaymentLinkRequest,
} from "../models/create-payment-link-request.js";
import {
  createPaymentLinkResponseSchema,
  type CreatePaymentLinkResponse,
} from "../models/create-payment-link-response.js";
import {
  deletePaymentLinkResponseSchema,
  type DeletePaymentLinkResponse,
} from "../models/delete-payment-link-response.js";
import {
  listPaymentLinksResponseSchema,
  type ListPaymentLinksResponse,
} from "../models/list-payment-links-response.js";
import {
  retrieveLocationSettingsResponseSchema,
  type RetrieveLocationSettingsResponse,
} from "../models/retrieve-location-settings-response.js";
import {
  retrieveMerchantSettingsResponseSchema,
  type RetrieveMerchantSettingsResponse,
} from "../models/retrieve-merchant-settings-response.js";
import {
  retrievePaymentLinkResponseSchema,
  type RetrievePaymentLinkResponse,
} from "../models/retrieve-payment-link-response.js";
import {
  updateLocationSettingsRequestSchema,
  type UpdateLocationSettingsRequest,
} from "../models/update-location-settings-request.js";
import {
  updateLocationSettingsResponseSchema,
  type UpdateLocationSettingsResponse,
} from "../models/update-location-settings-response.js";
import {
  updateMerchantSettingsRequestSchema,
  type UpdateMerchantSettingsRequest,
} from "../models/update-merchant-settings-request.js";
import {
  updateMerchantSettingsResponseSchema,
  type UpdateMerchantSettingsResponse,
} from "../models/update-merchant-settings-response.js";
import {
  updatePaymentLinkRequestSchema,
  type UpdatePaymentLinkRequest,
} from "../models/update-payment-link-request.js";
import {
  updatePaymentLinkResponseSchema,
  type UpdatePaymentLinkResponse,
} from "../models/update-payment-link-response.js";
import type { Servers } from "../servers.js";

export class CheckoutApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCheckout(
    request: CheckoutApi.CreateCheckoutRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCheckoutResponse, ResponseError> {
    return this.#rawClient.execute<CreateCheckoutResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/locations/{location_id}/checkouts"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCheckoutRequestSchema },
      },
      {
        success: { kind: "json", schema: createCheckoutResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createPaymentLink(
    request: CheckoutApi.CreatePaymentLinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreatePaymentLinkResponse, ResponseError> {
    return this.#rawClient.execute<CreatePaymentLinkResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/online-checkout/payment-links"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createPaymentLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: createPaymentLinkResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePaymentLink(
    request: CheckoutApi.DeletePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<DeletePaymentLinkResponse, ResponseError> {
    return this.#rawClient.execute<DeletePaymentLinkResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletePaymentLinkResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPaymentLinks(
    request: CheckoutApi.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPaymentLinksResponse, ResponseError> {
    return this.#rawClient.execute<ListPaymentLinksResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/online-checkout/payment-links"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPaymentLinksResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLocationSettings(
    request: CheckoutApi.RetrieveLocationSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationSettingsResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationSettingsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/online-checkout/location-settings/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationSettingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveMerchantSettings(
    options?: RequestOptions,
  ): ApiPromise<RetrieveMerchantSettingsResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveMerchantSettingsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/online-checkout/merchant-settings"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveMerchantSettingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrievePaymentLink(
    request: CheckoutApi.RetrievePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrievePaymentLinkResponse, ResponseError> {
    return this.#rawClient.execute<RetrievePaymentLinkResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrievePaymentLinkResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateLocationSettings(
    request: CheckoutApi.UpdateLocationSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateLocationSettingsResponse, ResponseError> {
    return this.#rawClient.execute<UpdateLocationSettingsResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/online-checkout/location-settings/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLocationSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateLocationSettingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateMerchantSettings(
    request: CheckoutApi.UpdateMerchantSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateMerchantSettingsResponse, ResponseError> {
    return this.#rawClient.execute<UpdateMerchantSettingsResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/online-checkout/merchant-settings"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: updateMerchantSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateMerchantSettingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePaymentLink(
    request: CheckoutApi.UpdatePaymentLinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdatePaymentLinkResponse, ResponseError> {
    return this.#rawClient.execute<UpdatePaymentLinkResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePaymentLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: updatePaymentLinkResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CheckoutApi {
  export type CreateCheckoutRequestParams = {
    locationId: string;
    body: CreateCheckoutRequest;
  };

  export type CreatePaymentLinkRequestParams = {
    body: CreatePaymentLinkRequest;
  };

  export type DeletePaymentLinkRequest = {
    id: string;
  };

  export type ListPaymentLinksRequest = {
    cursor?: string;
    limit?: number;
  };

  export type RetrieveLocationSettingsRequest = {
    locationId: string;
  };

  export type RetrievePaymentLinkRequest = {
    id: string;
  };

  export type UpdateLocationSettingsRequestParams = {
    locationId: string;
    body: UpdateLocationSettingsRequest;
  };

  export type UpdateMerchantSettingsRequestParams = {
    body: UpdateMerchantSettingsRequest;
  };

  export type UpdatePaymentLinkRequestParams = {
    id: string;
    body: UpdatePaymentLinkRequest;
  };
}
