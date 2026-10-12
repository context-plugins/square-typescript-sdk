import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * CreateCheckout
   *
   * @remarks
   * Links a `checkoutId` to a `checkout_page_url` that customers are directed to in order to
   * provide their payment information using a payment processing workflow hosted on
   * connect.squareup.com.
   *
   *
   * NOTE: The Checkout API has been updated with new features. For more information, see [Checkout
   * API highlights](https://developer.squareup.com/docs/checkout-api#checkout-api-highlights).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createCheckout(
    request: CheckoutApi.CreateCheckoutRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCheckoutResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/locations/{location_id}/checkouts"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCheckoutRequestSchema },
      },
      {
        success: { kind: "json", schema: createCheckoutResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreatePaymentLink
   *
   * @remarks
   * Creates a Square-hosted checkout page. Applications can share the resulting payment link with
   * their buyer to pay for goods and services.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentLink(
    request: CheckoutApi.CreatePaymentLinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreatePaymentLinkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/online-checkout/payment-links"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createPaymentLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: createPaymentLinkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeletePaymentLink
   *
   * @remarks
   * Deletes a payment link.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePaymentLink(
    request: CheckoutApi.DeletePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<DeletePaymentLinkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletePaymentLinkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListPaymentLinks
   *
   * @remarks
   * Lists all payment links.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentLinks(
    request: CheckoutApi.ListPaymentLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPaymentLinksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/online-checkout/payment-links"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPaymentLinksResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLocationSettings
   *
   * @remarks
   * Retrieves the location-level settings for a Square-hosted checkout page.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLocationSettings(
    request: CheckoutApi.RetrieveLocationSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationSettingsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/online-checkout/location-settings/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationSettingsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveMerchantSettings
   *
   * @remarks
   * Retrieves the merchant-level settings for a Square-hosted checkout page.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveMerchantSettings(options?: RequestOptions): ApiPromise<RetrieveMerchantSettingsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/online-checkout/merchant-settings"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveMerchantSettingsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrievePaymentLink
   *
   * @remarks
   * Retrieves a payment link.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrievePaymentLink(
    request: CheckoutApi.RetrievePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrievePaymentLinkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrievePaymentLinkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateLocationSettings
   *
   * @remarks
   * Updates the location-level settings for a Square-hosted checkout page.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLocationSettings(
    request: CheckoutApi.UpdateLocationSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateLocationSettingsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/online-checkout/location-settings/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLocationSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateLocationSettingsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateMerchantSettings
   *
   * @remarks
   * Updates the merchant-level settings for a Square-hosted checkout page.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMerchantSettings(
    request: CheckoutApi.UpdateMerchantSettingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateMerchantSettingsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/online-checkout/merchant-settings"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateMerchantSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateMerchantSettingsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdatePaymentLink
   *
   * @remarks
   * Updates a payment link. You can update the `payment_link` fields such as `description`,
   * `checkout_options`, and `pre_populated_data`. You cannot update other fields such as the
   * `order_id`, `version`, `URL`, or `timestamp` field.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePaymentLink(
    request: CheckoutApi.UpdatePaymentLinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdatePaymentLinkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/online-checkout/payment-links/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePaymentLinkRequestSchema },
      },
      {
        success: { kind: "json", schema: updatePaymentLinkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CheckoutApi {
  export type CreateCheckoutRequestParams = {
    /** The ID of the business location to associate the checkout with. */
    locationId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateCheckoutRequest;
  };

  export type CreatePaymentLinkRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreatePaymentLinkRequest;
  };

  export type DeletePaymentLinkRequest = {
    /** The ID of the payment link to delete. */
    id: string;
  };

  export type ListPaymentLinksRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. If a cursor is not provided, the
     * endpoint returns the first page of the results. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * A limit on the number of results to return per page. The limit is advisory and the
     * implementation might return more or less results. If the supplied limit is negative, zero, or
     * greater than the maximum limit of 1000, it is ignored.
     *
     * Default value: `100`
     */
    limit?: number;
  };

  export type RetrieveLocationSettingsRequest = {
    /** The ID of the location for which to retrieve settings. */
    locationId: string;
  };

  export type RetrievePaymentLinkRequest = {
    /** The ID of link to retrieve. */
    id: string;
  };

  export type UpdateLocationSettingsRequestParams = {
    /** The ID of the location for which to retrieve settings. */
    locationId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateLocationSettingsRequest;
  };

  export type UpdateMerchantSettingsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateMerchantSettingsRequest;
  };

  export type UpdatePaymentLinkRequestParams = {
    /** The ID of the payment link to update. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdatePaymentLinkRequest;
  };
}
