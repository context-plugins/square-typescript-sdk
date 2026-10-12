import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { employeeStatusSchema, type EmployeeStatus } from "../models/employee-status.js";
import {
  listEmployeesResponseSchema,
  type ListEmployeesResponse,
} from "../models/list-employees-response.js";
import {
  retrieveEmployeeResponseSchema,
  type RetrieveEmployeeResponse,
} from "../models/retrieve-employee-response.js";
import type { Servers } from "../servers.js";

export class Employees {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ListEmployees
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
  listEmployees(
    request: Employees.ListEmployeesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEmployeesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/employees"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => employeeStatusSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEmployeesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveEmployee
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
  retrieveEmployee(
    request: Employees.RetrieveEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveEmployeeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/employees/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveEmployeeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Employees {
  export type ListEmployeesRequest = {
    locationId?: string;
    /** Specifies the EmployeeStatus to filter the employee by. */
    status?: EmployeeStatus;
    /** The number of employees to be returned on each page. */
    limit?: number;
    /** The token required to retrieve the specified page of results. */
    cursor?: string;
  };

  export type RetrieveEmployeeRequest = {
    /** UUID for the employee that was requested. */
    id: string;
  };
}
