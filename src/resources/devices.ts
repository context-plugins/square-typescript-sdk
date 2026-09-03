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
    body: CreateDeviceCodeRequest;
  };

  export type GetDeviceRequest = {
    deviceId: string;
  };

  export type GetDeviceCodeRequest = {
    id: string;
  };

  export type ListDeviceCodesRequest = {
    cursor?: string;
    locationId?: string;
    productType?: ProductType;
    status?: DeviceCodeStatus;
  };

  export type ListDevicesRequest = {
    cursor?: string;
    sortOrder?: SortOrder;
    limit?: number;
    locationId?: string;
  };
}
