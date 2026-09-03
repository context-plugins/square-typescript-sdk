import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  bulkCreateVendors(
    request: Vendors.BulkCreateVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateVendorsResponse, ResponseError> {
    return this.#rawClient.execute<BulkCreateVendorsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/vendors/bulk-create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkCreateVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateVendorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkRetrieveVendors(
    request: Vendors.BulkRetrieveVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveVendorsResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveVendorsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/vendors/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkRetrieveVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveVendorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpdateVendors(
    request: Vendors.BulkUpdateVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateVendorsResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpdateVendorsResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/vendors/bulk-update"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpdateVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateVendorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createVendor(
    request: Vendors.CreateVendorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateVendorResponse, ResponseError> {
    return this.#rawClient.execute<CreateVendorResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/vendors/create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createVendorRequestSchema },
      },
      {
        success: { kind: "json", schema: createVendorResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveVendor(
    request: Vendors.RetrieveVendorRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveVendorResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveVendorResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/vendors/{vendor_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "vendor_id", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveVendorResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchVendors(
    request: Vendors.SearchVendorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchVendorsResponse, ResponseError> {
    return this.#rawClient.execute<SearchVendorsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/vendors/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchVendorsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchVendorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateVendor(
    request: Vendors.UpdateVendorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateVendorResponse, ResponseError> {
    return this.#rawClient.execute<UpdateVendorResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/vendors/{vendor_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "vendor_id", value: request.vendorId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateVendorRequestSchema },
      },
      {
        success: { kind: "json", schema: updateVendorResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Vendors {
  export type BulkCreateVendorsRequestParams = {
    body: BulkCreateVendorsRequest;
  };

  export type BulkRetrieveVendorsRequestParams = {
    body: BulkRetrieveVendorsRequest;
  };

  export type BulkUpdateVendorsRequestParams = {
    body: BulkUpdateVendorsRequest;
  };

  export type CreateVendorRequestParams = {
    body: CreateVendorRequest;
  };

  export type RetrieveVendorRequest = {
    vendorId: string;
  };

  export type SearchVendorsRequestParams = {
    body: SearchVendorsRequest;
  };

  export type UpdateVendorRequestParams = {
    vendorId: string;
    body: UpdateVendorRequest;
  };
}
