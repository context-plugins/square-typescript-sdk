import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  listEmployees(
    request: Employees.ListEmployeesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEmployeesResponse, ResponseError> {
    return this.#rawClient.execute<ListEmployeesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/employees"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => employeeStatusSchema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEmployeesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveEmployee(
    request: Employees.RetrieveEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveEmployeeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveEmployeeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/employees/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveEmployeeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Employees {
  export type ListEmployeesRequest = {
    locationId?: string;
    status?: EmployeeStatus;
    limit?: number;
    cursor?: string;
  };

  export type RetrieveEmployeeRequest = {
    id: string;
  };
}
