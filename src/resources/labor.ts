import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkPublishScheduledShiftsRequestSchema,
  type BulkPublishScheduledShiftsRequest,
} from "../models/bulk-publish-scheduled-shifts-request.js";
import {
  bulkPublishScheduledShiftsResponseSchema,
  type BulkPublishScheduledShiftsResponse,
} from "../models/bulk-publish-scheduled-shifts-response.js";
import {
  createBreakTypeRequestSchema,
  type CreateBreakTypeRequest,
} from "../models/create-break-type-request.js";
import {
  createBreakTypeResponseSchema,
  type CreateBreakTypeResponse,
} from "../models/create-break-type-response.js";
import {
  createScheduledShiftRequestSchema,
  type CreateScheduledShiftRequest,
} from "../models/create-scheduled-shift-request.js";
import {
  createScheduledShiftResponseSchema,
  type CreateScheduledShiftResponse,
} from "../models/create-scheduled-shift-response.js";
import { createShiftRequestSchema, type CreateShiftRequest } from "../models/create-shift-request.js";
import { createShiftResponseSchema, type CreateShiftResponse } from "../models/create-shift-response.js";
import {
  createTimecardRequestSchema,
  type CreateTimecardRequest,
} from "../models/create-timecard-request.js";
import {
  createTimecardResponseSchema,
  type CreateTimecardResponse,
} from "../models/create-timecard-response.js";
import {
  deleteBreakTypeResponseSchema,
  type DeleteBreakTypeResponse,
} from "../models/delete-break-type-response.js";
import { deleteShiftResponseSchema, type DeleteShiftResponse } from "../models/delete-shift-response.js";
import {
  deleteTimecardResponseSchema,
  type DeleteTimecardResponse,
} from "../models/delete-timecard-response.js";
import { getBreakTypeResponseSchema, type GetBreakTypeResponse } from "../models/get-break-type-response.js";
import {
  getEmployeeWageResponseSchema,
  type GetEmployeeWageResponse,
} from "../models/get-employee-wage-response.js";
import { getShiftResponseSchema, type GetShiftResponse } from "../models/get-shift-response.js";
import {
  getTeamMemberWageResponseSchema,
  type GetTeamMemberWageResponse,
} from "../models/get-team-member-wage-response.js";
import {
  listBreakTypesResponseSchema,
  type ListBreakTypesResponse,
} from "../models/list-break-types-response.js";
import {
  listEmployeeWagesResponseSchema,
  type ListEmployeeWagesResponse,
} from "../models/list-employee-wages-response.js";
import {
  listTeamMemberWagesResponseSchema,
  type ListTeamMemberWagesResponse,
} from "../models/list-team-member-wages-response.js";
import {
  listWorkweekConfigsResponseSchema,
  type ListWorkweekConfigsResponse,
} from "../models/list-workweek-configs-response.js";
import {
  publishScheduledShiftRequestSchema,
  type PublishScheduledShiftRequest,
} from "../models/publish-scheduled-shift-request.js";
import {
  publishScheduledShiftResponseSchema,
  type PublishScheduledShiftResponse,
} from "../models/publish-scheduled-shift-response.js";
import {
  retrieveScheduledShiftResponseSchema,
  type RetrieveScheduledShiftResponse,
} from "../models/retrieve-scheduled-shift-response.js";
import {
  retrieveTimecardResponseSchema,
  type RetrieveTimecardResponse,
} from "../models/retrieve-timecard-response.js";
import {
  searchScheduledShiftsRequestSchema,
  type SearchScheduledShiftsRequest,
} from "../models/search-scheduled-shifts-request.js";
import {
  searchScheduledShiftsResponseSchema,
  type SearchScheduledShiftsResponse,
} from "../models/search-scheduled-shifts-response.js";
import { searchShiftsRequestSchema, type SearchShiftsRequest } from "../models/search-shifts-request.js";
import { searchShiftsResponseSchema, type SearchShiftsResponse } from "../models/search-shifts-response.js";
import {
  searchTimecardsRequestSchema,
  type SearchTimecardsRequest,
} from "../models/search-timecards-request.js";
import {
  searchTimecardsResponseSchema,
  type SearchTimecardsResponse,
} from "../models/search-timecards-response.js";
import {
  updateBreakTypeRequestSchema,
  type UpdateBreakTypeRequest,
} from "../models/update-break-type-request.js";
import {
  updateBreakTypeResponseSchema,
  type UpdateBreakTypeResponse,
} from "../models/update-break-type-response.js";
import {
  updateScheduledShiftRequestSchema,
  type UpdateScheduledShiftRequest,
} from "../models/update-scheduled-shift-request.js";
import {
  updateScheduledShiftResponseSchema,
  type UpdateScheduledShiftResponse,
} from "../models/update-scheduled-shift-response.js";
import { updateShiftRequestSchema, type UpdateShiftRequest } from "../models/update-shift-request.js";
import { updateShiftResponseSchema, type UpdateShiftResponse } from "../models/update-shift-response.js";
import {
  updateTimecardRequestSchema,
  type UpdateTimecardRequest,
} from "../models/update-timecard-request.js";
import {
  updateTimecardResponseSchema,
  type UpdateTimecardResponse,
} from "../models/update-timecard-response.js";
import {
  updateWorkweekConfigRequestSchema,
  type UpdateWorkweekConfigRequest,
} from "../models/update-workweek-config-request.js";
import {
  updateWorkweekConfigResponseSchema,
  type UpdateWorkweekConfigResponse,
} from "../models/update-workweek-config-response.js";
import type { Servers } from "../servers.js";

export class Labor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BulkPublishScheduledShifts
   *
   * @remarks
   * Publishes 1 - 100 scheduled shifts. This endpoint takes a map of individual publish requests
   * and returns a map of responses. When a scheduled shift is published, Square keeps the
   * `draft_shift_details` field as is and copies it to the `published_shift_details` field.
   *
   * The minimum `start_at` and maximum `end_at` timestamps of all shifts in a
   * `BulkPublishScheduledShifts` request must fall within a two-week period.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  bulkPublishScheduledShifts(
    request: Labor.BulkPublishScheduledShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkPublishScheduledShiftsResponse, ResponseError> {
    return this.#rawClient.execute<BulkPublishScheduledShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/bulk-publish"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkPublishScheduledShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkPublishScheduledShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateBreakType
   *
   * @remarks
   * Creates a new `BreakType`.
   *
   * A `BreakType` is a template for creating `Break` objects. You must provide the following values
   * in your request to this endpoint:
   *
   * - `location_id`
   * - `break_name`
   * - `expected_duration`
   * - `is_paid`
   *
   * You can only have three `BreakType` instances per location. If you attempt to add a fourth
   * `BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per
   * location." is returned.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createBreakType(
    request: Labor.CreateBreakTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<CreateBreakTypeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/break-types"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createBreakTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: createBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateScheduledShift
   *
   * @remarks
   * Creates a scheduled shift by providing draft shift details such as job ID, team member
   * assignment, and start and end times.
   *
   * The following `draft_shift_details` fields are required:
   * - `location_id`
   * - `job_id`
   * - `start_at`
   * - `end_at`
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createScheduledShift(
    request: Labor.CreateScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<CreateScheduledShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: createScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateShift
   *
   * @remarks
   * Creates a new `Shift`.
   *
   * A `Shift` represents a complete workday for a single team member. You must provide the
   * following values in your request to this endpoint:
   *
   * - `location_id`
   * - `team_member_id`
   * - `start_at`
   *
   * An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
   * - The `status` of the new `Shift` is `OPEN` and the team member has another shift with an
   *   `OPEN` status.
   * - The `start_at` date is in the future.
   * - The `start_at` or `end_at` date overlaps another shift for the same team member.
   * - The `Break` instances are set in the request and a break `start_at` is before the
   *   `Shift.start_at`, a break `end_at` is after the `Shift.end_at`, or both.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  createShift(
    request: Labor.CreateShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateShiftResponse, ResponseError> {
    return this.#rawClient.execute<CreateShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/shifts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: createShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * CreateTimecard
   *
   * @remarks
   * Creates a new `Timecard`.
   *
   * A `Timecard` represents a complete workday for a single team member. You must provide the
   * following values in your request to this endpoint:
   *
   * - `location_id`
   * - `team_member_id`
   * - `start_at`
   *
   * An attempt to create a new `Timecard` can result in a `BAD_REQUEST` error when:
   * - The `status` of the new `Timecard` is `OPEN` and the team member has another timecard with an
   *   `OPEN` status.
   * - The `start_at` date is in the future.
   * - The `start_at` or `end_at` date overlaps another timecard for the same team member.
   * - The `Break` instances are set in the request and a break `start_at` is before the
   *   `Timecard.start_at`, a break `end_at` is after the `Timecard.end_at`, or both.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  createTimecard(
    request: Labor.CreateTimecardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTimecardResponse, ResponseError> {
    return this.#rawClient.execute<CreateTimecardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/timecards"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTimecardRequestSchema },
      },
      {
        success: { kind: "json", schema: createTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteBreakType
   *
   * @remarks
   * Deletes an existing `BreakType`.
   *
   * A `BreakType` can be deleted even if it is referenced from a `Shift`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteBreakType(
    request: Labor.DeleteBreakTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteBreakTypeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteShift
   *
   * @remarks
   * Deletes a `Shift`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  deleteShift(
    request: Labor.DeleteShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteShiftResponse, ResponseError> {
    return this.#rawClient.execute<DeleteShiftResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * DeleteTimecard
   *
   * @remarks
   * Deletes a `Timecard`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  deleteTimecard(
    request: Labor.DeleteTimecardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteTimecardResponse, ResponseError> {
    return this.#rawClient.execute<DeleteTimecardResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetBreakType
   *
   * @remarks
   * Returns a single `BreakType` specified by `id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  getBreakType(
    request: Labor.GetBreakTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<GetBreakTypeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetEmployeeWage
   *
   * @remarks
   * Returns a single `EmployeeWage` specified by `id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  getEmployeeWage(
    request: Labor.GetEmployeeWageRequest,
    options?: RequestOptions,
  ): ApiPromise<GetEmployeeWageResponse, ResponseError> {
    return this.#rawClient.execute<GetEmployeeWageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/employee-wages/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getEmployeeWageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetShift
   *
   * @remarks
   * Returns a single `Shift` specified by `id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  getShift(
    request: Labor.GetShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<GetShiftResponse, ResponseError> {
    return this.#rawClient.execute<GetShiftResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * GetTeamMemberWage
   *
   * @remarks
   * Returns a single `TeamMemberWage` specified by `id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  getTeamMemberWage(
    request: Labor.GetTeamMemberWageRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTeamMemberWageResponse, ResponseError> {
    return this.#rawClient.execute<GetTeamMemberWageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/team-member-wages/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTeamMemberWageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListBreakTypes
   *
   * @remarks
   * Returns a paginated list of `BreakType` instances for a business.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listBreakTypes(
    request: Labor.ListBreakTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBreakTypesResponse, ResponseError> {
    return this.#rawClient.execute<ListBreakTypesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/break-types"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBreakTypesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListEmployeeWages
   *
   * @remarks
   * Returns a paginated list of `EmployeeWage` instances for a business.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  listEmployeeWages(
    request: Labor.ListEmployeeWagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEmployeeWagesResponse, ResponseError> {
    return this.#rawClient.execute<ListEmployeeWagesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/employee-wages"),
        auth: this.#auth.oauth2,
        query: [
          { name: "employee_id", value: request.employeeId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEmployeeWagesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListTeamMemberWages
   *
   * @remarks
   * Returns a paginated list of `TeamMemberWage` instances for a business.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listTeamMemberWages(
    request: Labor.ListTeamMemberWagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTeamMemberWagesResponse, ResponseError> {
    return this.#rawClient.execute<ListTeamMemberWagesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/team-member-wages"),
        auth: this.#auth.oauth2,
        query: [
          { name: "team_member_id", value: request.teamMemberId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTeamMemberWagesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * ListWorkweekConfigs
   *
   * @remarks
   * Returns a list of `WorkweekConfig` instances for a business.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  listWorkweekConfigs(
    request: Labor.ListWorkweekConfigsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkweekConfigsResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkweekConfigsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/workweek-configs"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkweekConfigsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * PublishScheduledShift
   *
   * @remarks
   * Publishes a scheduled shift. When a scheduled shift is published, Square keeps the
   * `draft_shift_details` field as is and copies it to the `published_shift_details` field.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  publishScheduledShift(
    request: Labor.PublishScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PublishScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<PublishScheduledShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}/publish"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publishScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: publishScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveScheduledShift
   *
   * @remarks
   * Retrieves a scheduled shift by ID.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveScheduledShift(
    request: Labor.RetrieveScheduledShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveScheduledShiftResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * RetrieveTimecard
   *
   * @remarks
   * Returns a single `Timecard` specified by `id`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  retrieveTimecard(
    request: Labor.RetrieveTimecardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTimecardResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTimecardResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * SearchScheduledShifts
   *
   * @remarks
   * Returns a paginated list of scheduled shifts, with optional filter and sort settings. By
   * default, results are sorted by `start_at` in ascending order.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  searchScheduledShifts(
    request: Labor.SearchScheduledShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchScheduledShiftsResponse, ResponseError> {
    return this.#rawClient.execute<SearchScheduledShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchScheduledShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchScheduledShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * SearchShifts
   *
   * @remarks
   * Returns a paginated list of `Shift` records for a business. The list to be returned can be
   * filtered by:
   * - Location IDs
   * - Team member IDs
   * - Shift status (`OPEN` or `CLOSED`)
   * - Shift start
   * - Shift end
   * - Workday details
   *
   * The list can be sorted by:
   * - `START_AT`
   * - `END_AT`
   * - `CREATED_AT`
   * - `UPDATED_AT`
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  searchShifts(
    request: Labor.SearchShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchShiftsResponse, ResponseError> {
    return this.#rawClient.execute<SearchShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/shifts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * SearchTimecards
   *
   * @remarks
   * Returns a paginated list of `Timecard` records for a business. The list to be returned can be
   * filtered by:
   * - Location IDs
   * - Team member IDs
   * - Timecard status (`OPEN` or `CLOSED`)
   * - Timecard start
   * - Timecard end
   * - Workday details
   *
   * The list can be sorted by:
   * - `START_AT`
   * - `END_AT`
   * - `CREATED_AT`
   * - `UPDATED_AT`
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  searchTimecards(
    request: Labor.SearchTimecardsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTimecardsResponse, ResponseError> {
    return this.#rawClient.execute<SearchTimecardsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/timecards/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTimecardsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTimecardsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateBreakType
   *
   * @remarks
   * Updates an existing `BreakType`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateBreakType(
    request: Labor.UpdateBreakTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<UpdateBreakTypeResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateBreakTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: updateBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateScheduledShift
   *
   * @remarks
   * Updates the draft shift details for a scheduled shift. This endpoint supports sparse updates,
   * so only new, changed, or removed fields are required in the request. You must publish the shift
   * to make updates public.
   *
   * You can make the following updates to `draft_shift_details`:
   * - Change the `location_id`, `job_id`, `start_at`, and `end_at` fields.
   * - Add, change, or clear the `team_member_id` and `notes` fields. To clear these fields, set the
   *   value to null.
   * - Change the `is_deleted` field. To delete a scheduled shift, set `is_deleted` to true and then
   *   publish the shift.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateScheduledShift(
    request: Labor.UpdateScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<UpdateScheduledShiftResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: updateScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateShift
   *
   * @remarks
   * Updates an existing `Shift`.
   *
   * When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have the
   * `end_at` property set to a valid RFC-3339 datetime string.
   *
   * When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at` set
   * on each `Break`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   *
   * @deprecated
   */
  updateShift(
    request: Labor.UpdateShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateShiftResponse, ResponseError> {
    return this.#rawClient.execute<UpdateShiftResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: updateShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateTimecard
   *
   * @remarks
   * Updates an existing `Timecard`.
   *
   * When adding a `Break` to a `Timecard`, any earlier `Break` instances in the `Timecard` have the
   * `end_at` property set to a valid RFC-3339 datetime string.
   *
   * When closing a `Timecard`, all `Break` instances in the `Timecard` must be complete with
   * `end_at` set on each `Break`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateTimecard(
    request: Labor.UpdateTimecardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTimecardResponse, ResponseError> {
    return this.#rawClient.execute<UpdateTimecardResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTimecardRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  /**
   * UpdateWorkweekConfig
   *
   * @remarks
   * Updates a `WorkweekConfig`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
  updateWorkweekConfig(
    request: Labor.UpdateWorkweekConfigRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWorkweekConfigResponse, ResponseError> {
    return this.#rawClient.execute<UpdateWorkweekConfigResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/workweek-configs/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWorkweekConfigRequestSchema },
      },
      {
        success: { kind: "json", schema: updateWorkweekConfigResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Labor {
  export type BulkPublishScheduledShiftsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkPublishScheduledShiftsRequest;
  };

  export type CreateBreakTypeRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateBreakTypeRequest;
  };

  export type CreateScheduledShiftRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateScheduledShiftRequest;
  };

  export type CreateShiftRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateShiftRequest;
  };

  export type CreateTimecardRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTimecardRequest;
  };

  export type DeleteBreakTypeRequest = {
    /** The UUID for the `BreakType` being deleted. */
    id: string;
  };

  export type DeleteShiftRequest = {
    /** The UUID for the `Shift` being deleted. */
    id: string;
  };

  export type DeleteTimecardRequest = {
    /** The UUID for the `Timecard` being deleted. */
    id: string;
  };

  export type GetBreakTypeRequest = {
    /** The UUID for the `BreakType` being retrieved. */
    id: string;
  };

  export type GetEmployeeWageRequest = {
    /** The UUID for the `EmployeeWage` being retrieved. */
    id: string;
  };

  export type GetShiftRequest = {
    /** The UUID for the `Shift` being retrieved. */
    id: string;
  };

  export type GetTeamMemberWageRequest = {
    /** The UUID for the `TeamMemberWage` being retrieved. */
    id: string;
  };

  export type ListBreakTypesRequest = {
    /**
     * Filter the returned `BreakType` results to only those that are associated with the specified
     * location.
     */
    locationId?: string;
    /**
     * The maximum number of `BreakType` results to return per page. The number can range between 1
     * and 200. The default is 200.
     */
    limit?: number;
    /** A pointer to the next page of `BreakType` results to fetch. */
    cursor?: string;
  };

  export type ListEmployeeWagesRequest = {
    /** Filter the returned wages to only those that are associated with the specified employee. */
    employeeId?: string;
    /**
     * The maximum number of `EmployeeWage` results to return per page. The number can range between
     * 1 and 200. The default is 200.
     */
    limit?: number;
    /** A pointer to the next page of `EmployeeWage` results to fetch. */
    cursor?: string;
  };

  export type ListTeamMemberWagesRequest = {
    /**
     * Filter the returned wages to only those that are associated with the specified team member.
     */
    teamMemberId?: string;
    /**
     * The maximum number of `TeamMemberWage` results to return per page. The number can range
     * between 1 and 200. The default is 200.
     */
    limit?: number;
    /** A pointer to the next page of `EmployeeWage` results to fetch. */
    cursor?: string;
  };

  export type ListWorkweekConfigsRequest = {
    /** The maximum number of `WorkweekConfigs` results to return per page. */
    limit?: number;
    /** A pointer to the next page of `WorkweekConfig` results to fetch. */
    cursor?: string;
  };

  export type PublishScheduledShiftRequestParams = {
    /** The ID of the scheduled shift to publish. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: PublishScheduledShiftRequest;
  };

  export type RetrieveScheduledShiftRequest = {
    /** The ID of the scheduled shift to retrieve. */
    id: string;
  };

  export type RetrieveTimecardRequest = {
    /** The UUID for the `Timecard` being retrieved. */
    id: string;
  };

  export type SearchScheduledShiftsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchScheduledShiftsRequest;
  };

  export type SearchShiftsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchShiftsRequest;
  };

  export type SearchTimecardsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTimecardsRequest;
  };

  export type UpdateBreakTypeRequestParams = {
    /** The UUID for the `BreakType` being updated. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateBreakTypeRequest;
  };

  export type UpdateScheduledShiftRequestParams = {
    /** The ID of the scheduled shift to update. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateScheduledShiftRequest;
  };

  export type UpdateShiftRequestParams = {
    /** The ID of the object being updated. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateShiftRequest;
  };

  export type UpdateTimecardRequestParams = {
    /** The ID of the object being updated. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateTimecardRequest;
  };

  export type UpdateWorkweekConfigRequestParams = {
    /** The UUID for the `WorkweekConfig` object being updated. */
    id: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateWorkweekConfigRequest;
  };
}
