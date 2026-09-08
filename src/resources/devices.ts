import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createDeviceCodeRequestSchema,
  type CreateDeviceCodeRequest,
} from "../models/create-device-code-request.js";
import {
  createDeviceCodeResponseSchema,
  type CreateDeviceCodeResponse,
} from "../models/create-device-code-response.js";
import { deviceCodeStatusSchema, type DeviceCodeStatus } from "../models/device-code-status.js";
import {
  getDeviceCodeResponseSchema,
  type GetDeviceCodeResponse,
} from "../models/get-device-code-response.js";
import { getDeviceResponseSchema, type GetDeviceResponse } from "../models/get-device-response.js";
import {
  listDeviceCodesResponseSchema,
  type ListDeviceCodesResponse,
} from "../models/list-device-codes-response.js";
import { listDevicesResponseSchema, type ListDevicesResponse } from "../models/list-devices-response.js";
import { productTypeSchema, type ProductType } from "../models/product-type.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import type { Servers } from "../servers.js";

export class Devices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CreateDeviceCode
   *
   * @remarks
   * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the
   * connected terminal mode.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createDeviceCode(
    request: Devices.CreateDeviceCodeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateDeviceCodeResponse, ResponseError> {
    return this.#rawClient.execute<CreateDeviceCodeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/devices/codes"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createDeviceCodeRequestSchema },
      },
      {
        success: { kind: "json", schema: createDeviceCodeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetDevice
   *
   * @remarks
   * Retrieves Device with the associated `device_id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  getDevice(
    request: Devices.GetDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDeviceResponse, ResponseError> {
    return this.#rawClient.execute<GetDeviceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/devices/{device_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "device_id", value: request.deviceId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDeviceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetDeviceCode
   *
   * @remarks
   * Retrieves DeviceCode with the associated ID.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  getDeviceCode(
    request: Devices.GetDeviceCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<GetDeviceCodeResponse, ResponseError> {
    return this.#rawClient.execute<GetDeviceCodeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/devices/codes/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getDeviceCodeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListDeviceCodes
   *
   * @remarks
   * Lists all DeviceCodes associated with the merchant.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listDeviceCodes(
    request: Devices.ListDeviceCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDeviceCodesResponse, ResponseError> {
    return this.#rawClient.execute<ListDeviceCodesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/devices/codes"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          {
            name: "product_type",
            value: request.productType,
            schema: s.optional(s.lazy(() => productTypeSchema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => deviceCodeStatusSchema)) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDeviceCodesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListDevices
   *
   * @remarks
   * List devices associated with the merchant. Currently, only Terminal API devices are supported.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listDevices(
    request: Devices.ListDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDevicesResponse, ResponseError> {
    return this.#rawClient.execute<ListDevicesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/devices"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sort_order", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDevicesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Devices {
  export type CreateDeviceCodeRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateDeviceCodeRequest;
  };

  export type GetDeviceRequest = {
    /** The unique ID for the desired `Device`. */
    deviceId: string;
  };

  export type GetDeviceCodeRequest = {
    /** The unique identifier for the device code. */
    id: string;
  };

  export type ListDeviceCodesRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for your original query.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination)
     * for more information.
     */
    cursor?: string;
    /**
     * If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all
     * locations if empty.
     */
    locationId?: string;
    /**
     * If specified, only returns DeviceCodes targeting the specified product type. Returns
     * DeviceCodes of all product types if empty.
     */
    productType?: ProductType;
    /**
     * If specified, returns DeviceCodes with the specified statuses. Returns DeviceCodes of status
     * `PAIRED` and `UNPAIRED` if empty.
     */
    status?: DeviceCodeStatus;
  };

  export type ListDevicesRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. See
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
     * for more information.
     */
    cursor?: string;
    /**
     * The order in which results are listed.
     * - `ASC` - Oldest to newest.
     * - `DESC` - Newest to oldest (default).
     */
    sortOrder?: SortOrder;
    /** The number of results to return in a single page. */
    limit?: number;
    /** If present, only returns devices at the target location. */
    locationId?: string;
  };
}
