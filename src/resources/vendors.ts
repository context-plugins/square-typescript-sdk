import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkCreateVendorsRequestSchema,
  type BulkCreateVendorsRequest,
} from "../models/bulk-create-vendors-request.js";
import {
  bulkCreateVendorsResponseSchema,
  type BulkCreateVendorsResponse,
} from "../models/bulk-create-vendors-response.js";
import {
  bulkRetrieveVendorsRequestSchema,
  type BulkRetrieveVendorsRequest,
} from "../models/bulk-retrieve-vendors-request.js";
import {
  bulkRetrieveVendorsResponseSchema,
  type BulkRetrieveVendorsResponse,
} from "../models/bulk-retrieve-vendors-response.js";
import {
  bulkUpdateVendorsRequestSchema,
  type BulkUpdateVendorsRequest,
} from "../models/bulk-update-vendors-request.js";
import {
  bulkUpdateVendorsResponseSchema,
  type BulkUpdateVendorsResponse,
} from "../models/bulk-update-vendors-response.js";
import { createVendorRequestSchema, type CreateVendorRequest } from "../models/create-vendor-request.js";
import { createVendorResponseSchema, type CreateVendorResponse } from "../models/create-vendor-response.js";
import {
  retrieveVendorResponseSchema,
  type RetrieveVendorResponse,
} from "../models/retrieve-vendor-response.js";
import { searchVendorsRequestSchema, type SearchVendorsRequest } from "../models/search-vendors-request.js";
import {
  searchVendorsResponseSchema,
  type SearchVendorsResponse,
} from "../models/search-vendors-response.js";
import { updateVendorRequestSchema, type UpdateVendorRequest } from "../models/update-vendor-request.js";
import { updateVendorResponseSchema, type UpdateVendorResponse } from "../models/update-vendor-response.js";
import type { Servers } from "../servers.js";

export class Vendors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkCreateVendors
   *
   * @remarks
   * Creates one or more [Vendor](entity:Vendor) objects to represent suppliers to a seller.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateVendors(
    request: Vendors.BulkCreateVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateVendorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/vendors/bulk-create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkCreateVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateVendorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkRetrieveVendors
   *
   * @remarks
   * Retrieves one or more vendors of specified [Vendor](entity:Vendor) IDs.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRetrieveVendors(
    request: Vendors.BulkRetrieveVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveVendorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/vendors/bulk-retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkRetrieveVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveVendorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkUpdateVendors
   *
   * @remarks
   * Updates one or more of existing [Vendor](entity:Vendor) objects as suppliers to a seller.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateVendors(
    request: Vendors.BulkUpdateVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateVendorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/vendors/bulk-update"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpdateVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateVendorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateVendor
   *
   * @remarks
   * Creates a single [Vendor](entity:Vendor) object to represent a supplier to a seller.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendor(
    request: Vendors.CreateVendorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateVendorResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/vendors/create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createVendorRequestSchema },
      },
      {
        success: { kind: "json", schema: createVendorResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveVendor
   *
   * @remarks
   * Retrieves the vendor of a specified [Vendor](entity:Vendor) ID.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveVendor(
    request: Vendors.RetrieveVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveVendorResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/vendors/{vendor_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "vendor_id", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveVendorResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchVendors
   *
   * @remarks
   * Searches for vendors using a filter against supported [Vendor](entity:Vendor) properties and a
   * supported sorter.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchVendors(
    request: Vendors.SearchVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchVendorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/vendors/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchVendorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateVendor
   *
   * @remarks
   * Updates an existing [Vendor](entity:Vendor) object as a supplier to a seller.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVendor(
    request: Vendors.UpdateVendorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateVendorResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/vendors/{vendor_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "vendor_id", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateVendorRequestSchema },
      },
      {
        success: { kind: "json", schema: updateVendorResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Vendors {
  export type BulkCreateVendorsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkCreateVendorsRequest;
  };

  export type BulkRetrieveVendorsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkRetrieveVendorsRequest;
  };

  export type BulkUpdateVendorsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpdateVendorsRequest;
  };

  export type CreateVendorRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateVendorRequest;
  };

  export type RetrieveVendorRequest = {
    /** ID of the [Vendor](entity:Vendor) to retrieve. */
    vendorId: string;
  };

  export type SearchVendorsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchVendorsRequest;
  };

  export type UpdateVendorRequestParams = {
    vendorId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateVendorRequest;
  };
}
